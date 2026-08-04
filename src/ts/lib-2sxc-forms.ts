import { PristineOptions } from "./lib-2sxc-pristine-options";
import Pristine from "pristinejs";

declare let $2sxc: any;


/*
  This is a shared code used in various 2sxc apps. Make sure that they are in sync, so if you improve it, improve all 2sxc apps which use this. 
  ATM they are:
  - EventsAndCourses6
  - MobiusForms6
  - Jobs
  The master with the newest / best version must always be the Gallery7, the others should then get a fresh copy.
  Because this is shared, all parameters like DOM-IDs etc. must be provided in the Init-call that it can work across apps
*/

const promiseFileMap = (file: { Encoded: Promise<unknown> }) => {
  if (!file.Encoded) return file;
  return new Promise((resolve) => {
    file.Encoded.then((result) => resolve({ ...file, Encoded: result }));
  });
};

// automatically build the send-object with all properties,
// based on all form-fields which have a item-property=""
export async function getFormValues(formWrapper: Element): Promise<any> {
  let data: any = {
    Files: [],
    Fields: {},
    Terms: {},
  };

  const fields = formWrapper.querySelectorAll("input,textarea,select");

  fields.forEach((formField) => {
    const field = formField as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const fieldKey = getFieldKey(field);
    if (!fieldKey || !field.value) return;
    const type = formField.getAttribute("type")?.toLowerCase();

    // for checkboxList to get a array with fieldId and the values
    if (field.hasAttribute("data-checkbox")) {
      const fieldId = field.getAttribute("data-checkbox");
      const fieldValue = getFieldValue(field);
      // Check if the array for this fieldId exists, if not, create it in the data object

      if (fieldId && !data["Fields"][fieldId]) {
        data["Fields"][fieldId] = [];
      }

      if (fieldId && fieldValue !== "") {
        data["Fields"][fieldId].push(fieldValue);
      }
    }

    // for Multiple Dropdown to get a array with fieldId and the values
    if (
      formField.hasAttribute("data-multiple-dropdown") &&
      formField.tagName == "SELECT"
    ) {
      const fieldId = formField.id; // Use the ID of the select element
      const selectedOptions = (formField as any).selectedOptions;

      // Check if the array for this fieldId exists, if not, create it in the data object
      if (!data["Fields"][fieldId]) {
        data["Fields"][fieldId] = [];
      }
      // loop for each option Value
      for (let i = 0; i < selectedOptions.length; i++) {
        const optionValue = selectedOptions[i].value;
        if (optionValue !== "") {
          data["Fields"][fieldId].push(optionValue);
        }
      }
      return;
    }

    // if it has a recipient email
    if (formField.getAttribute("mail") === "recipientEmail") {
      if (!data["CustomerMails"]) {
        data["CustomerMails"] = "";
      }
      if (data["CustomerMails"] !== "") {
        data["CustomerMails"] += "; ";
      }
      data["CustomerMails"] += String(getFieldValue(field) ?? "");
    }

    // If it is an attachment then add it to Files
    if (type === "file") {
      data["Files"].push({
        ...(getFieldValue(field) as object),
        Field: fieldKey,
      });
      return;
    }
    // If Checkbox or Radio not checked, data will not add in the Request
    if (
      (type === "checkbox" || type === "radio") &&
      formField instanceof HTMLInputElement &&
      !formField.checked
    ) {
      return;
    }
    // If the type is a checkbox with an attribute terms, then it will add it to the terms

    if (type === "checkbox" && formField.getAttribute("terms")) {
      data["Terms"][fieldKey] = getFieldValue(field);
      return;
    } else if (!formField.hasAttribute("data-checkbox")) {
      // If it is a normal field, e.g. first name, then it is added to the field.
      data["Fields"][fieldKey] = getFieldValue(field);
    }
  });

  return Promise.all(data.Files.map(promiseFileMap)).then((loadedFiles) => {
    return { ...data, Files: loadedFiles };
  });
}

function getFieldKey(formField: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): string | null {
  // get the property name from special-attribute, name OR id
  return formField.getAttribute("name") || formField.getAttribute("id");
}

function getFieldValue(
  formField: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
): { Encoded: Promise<unknown>; Name: string } | unknown {
  // extract data from file fields
  const type = formField.getAttribute("type")?.toLowerCase();
  if (!type) return formField.value;
  switch (type) {
    case "file":
      if (!(formField instanceof HTMLInputElement)) return;
      const file = formField.files?.[0];
      if (!file) return;
      return {
        Name: file.name,
        Encoded: new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (e) => {
            resolve((e.target as FileReader | null)?.result);
          };
        }),
      };
    case "radio":
      if (!(formField instanceof HTMLInputElement)) return formField.value;
      return formField.value;
    case "checkbox":
      if (!(formField instanceof HTMLInputElement)) return formField.value;
      return formField.checked ? formField.value : "";
    default:
      return formField.value;
  }
}

export function validateForm(
  formWrapper: Element,
  options: PristineOptions
): boolean {
  const pristine = new Pristine(formWrapper, options);
  return pristine.validate();
}

export function sendForm(
  formData: any,
  submitButtom: HTMLButtonElement,
  endpoint: string = "Form/ProcessForm"
): Promise<unknown> {
  const sxc = $2sxc(submitButtom);
  return sxc.webApi.fetchRaw(endpoint, formData);
}

export function disableInputs(wrapper: Element, state: boolean) {
  wrapper.classList.toggle("disable", state);
  wrapper
    .querySelectorAll("input,textarea,select")
    .forEach((elem) => elem.setAttribute("disabled", "true"));
}

export function enableInputs(wrapper: Element) {
  wrapper.classList.remove("disable");
  wrapper
    .querySelectorAll("input,textarea,select")
    .forEach((elem) => elem.setAttribute("disabled", "false"));
}
