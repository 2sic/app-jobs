using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Text;
using ToSic.Razor.Blade;

public class SendMail : Custom.Hybrid.Code14
{
  public void sendMails(Dictionary<string,object> contactFormRequest, dynamic files) {
    var settings = new {
      MailFrom = Settings.MailFrom,
      OwnerMail = Settings.OwnerMail,
      OwnerMailCC = "",
      OwnerMailTemplateFile = Settings.OwnerMailTemplateFile,
      CustomerMailCC = "",
      CustomerMailTemplateFile = Settings.CustomerMailTemplateFile
    };

    var customerMail = contactFormRequest["Mail"].ToString();

    try {
      Send(
        settings.OwnerMailTemplateFile, contactFormRequest, settings.MailFrom, settings.OwnerMail, settings.OwnerMailCC, customerMail, files
      );
    } catch(Exception ex) {
      Log.Exception(ex);
      throw new Exception("OwnerSend mail failed: " + ex.Message);
    }

    try {
      Send(
        settings.CustomerMailTemplateFile, contactFormRequest, settings.MailFrom, customerMail, settings.CustomerMailCC, settings.OwnerMail, files
      );
    } catch(Exception ex) {
      Log.Exception(ex);
      throw new Exception("OwnerSend mail failed: " + ex.Message);
    }
  }

  public bool Send(string emailTemplateFilename, Dictionary<string,object> valuesWithMailLabels, string from, string to, string cc, string replyTo, List<ToSic.Sxc.Adam.IFile> files)
  {
    // Log what's happening in case we run into problems
    var wrapLog = Log.Call("template:" + emailTemplateFilename + ", from:" + from + ", to:" + to + ", cc:" + cc + ", reply:" + replyTo);

    Log.Add("Get MailEngine");
    var mailEngine = CreateInstance("../../email-templates/" + emailTemplateFilename);
    var mailBody = mailEngine.Message(valuesWithMailLabels).ToString();
    var subject = mailEngine.Subject();

    // Send Mail
    // Note that if an error occurs, this will bubble up, the caller will convert it to format for the client
    Log.Add("sending...");
    Kit.Mail.Send(from: from, to: to, cc: cc, replyTo: replyTo, subject: subject, body: mailBody, attachments: files);

    // Log to Platform - just as a last resort in case something is lost, to track down why
    var message = new StringBuilder()
      .AppendLine("Send Mail")
      .AppendLine("From:    " + from)
      .AppendLine("To:      " + to)
      .AppendLine("CC:      " + cc)
      .AppendLine("Reply:   " + replyTo)
      .AppendLine("Subject: " + subject)
      .ToString();


    Kit.Log.Add("SendMail", message);
    wrapLog("ok");

    return true;
  }
}