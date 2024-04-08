// DO NOT MODIFY THIS FILE - IT IS AUTO-GENERATED
// See also: https://go.2sxc.org/copilot-data
// To extend it, create a "AppSettings.cs" with this contents:
/*
namespace AppCode.Data
{
  public partial class AppSettings
  {
    // Add your own properties and methods here
  }
}
*/

// Generator:   CSharpDataModelsGenerator v17.06.02
// App/Edition: Jobs/
// User:        2sic Web-Developer
// When:        2024-04-08 07:53:49Z
using ToSic.Sxc.Adam;

namespace AppCode.Data
{
  // This is a generated class for AppSettings (scope: System.App)
  // To extend/modify it, see instructions above.

  /// <summary>
  /// AppSettings data. <br/>
  /// Generated 2024-04-08 07:53:49Z. Re-generate whenever you change the ContentType. <br/>
  /// <br/>
  /// Default properties such as `.Title` or `.Id` are provided in the base class. <br/>
  /// Most properties have a simple access, such as `.CustomerMailTemplateFile`. <br/>
  /// For other properties or uses, use methods such as
  /// .IsNotEmpty("FieldName"), .String("FieldName"), .Children(...), .Picture(...), .Html(...).
  /// </summary>
  /// <remarks>
  /// This Content-Type is NOT in the default scope, so you may not see it in the Admin UI. It's in the scope System.App.
  /// </remarks>
  public partial class AppSettings: AutoGenerated.ZagAppSettings
  {  }
}

namespace AppCode.Data.AutoGenerated
{
  /// <summary>
  /// Auto-Generated base class for System.App.AppSettings in separate namespace and special name to avoid accidental use.
  /// </summary>
  public abstract class ZagAppSettings: Custom.Data.CustomItem
  {
    /// <summary>
    /// CustomerMailTemplateFile as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("CustomerMailTemplateFile", scrubHtml: true) etc.
    /// </summary>
    public string CustomerMailTemplateFile => _item.String("CustomerMailTemplateFile", fallback: "");

    /// <summary>
    /// DetailsPage as link (url). <br/>
    /// To get the underlying value like 'file:72' use String("DetailsPage")
    /// </summary>
    public string DetailsPage => _item.Url("DetailsPage");

    /// <summary>
    /// Get the file object for DetailsPage - or null if it's empty or not referencing a file.
    /// </summary>
    public IFile DetailsPageFile => _item.File("DetailsPage");

    /// <summary>
    /// Get the folder object for DetailsPage.
    /// </summary>
    public IFolder DetailsPageFolder => _item.Folder("DetailsPage");

    /// <summary>
    /// DetailsPageShowWarning as bool. <br/>
    /// To get nullable use .Get("DetailsPageShowWarning") as bool?;
    /// </summary>
    public bool DetailsPageShowWarning => _item.Bool("DetailsPageShowWarning");

    /// <summary>
    /// EnableRegistration as bool. <br/>
    /// To get nullable use .Get("EnableRegistration") as bool?;
    /// </summary>
    public bool EnableRegistration => _item.Bool("EnableRegistration");

    /// <summary>
    /// GoogleJobsApi as bool. <br/>
    /// To get nullable use .Get("GoogleJobsApi") as bool?;
    /// </summary>
    public bool GoogleJobsApi => _item.Bool("GoogleJobsApi");

    /// <summary>
    /// Identifier as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("Identifier", scrubHtml: true) etc.
    /// </summary>
    public string Identifier => _item.String("Identifier", fallback: "");

    /// <summary>
    /// MailFrom as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("MailFrom", scrubHtml: true) etc.
    /// </summary>
    public string MailFrom => _item.String("MailFrom", fallback: "");

    /// <summary>
    /// MainPage as link (url). <br/>
    /// To get the underlying value like 'file:72' use String("MainPage")
    /// </summary>
    public string MainPage => _item.Url("MainPage");

    /// <summary>
    /// Get the file object for MainPage - or null if it's empty or not referencing a file.
    /// </summary>
    public IFile MainPageFile => _item.File("MainPage");

    /// <summary>
    /// Get the folder object for MainPage.
    /// </summary>
    public IFolder MainPageFolder => _item.Folder("MainPage");

    /// <summary>
    /// Organization as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("Organization", scrubHtml: true) etc.
    /// </summary>
    public string Organization => _item.String("Organization", fallback: "");

    /// <summary>
    /// OrganizationCity as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("OrganizationCity", scrubHtml: true) etc.
    /// </summary>
    public string OrganizationCity => _item.String("OrganizationCity", fallback: "");

    /// <summary>
    /// OrganizationCountry as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("OrganizationCountry", scrubHtml: true) etc.
    /// </summary>
    public string OrganizationCountry => _item.String("OrganizationCountry", fallback: "");

    /// <summary>
    /// OrganizationRegion as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("OrganizationRegion", scrubHtml: true) etc.
    /// </summary>
    public string OrganizationRegion => _item.String("OrganizationRegion", fallback: "");

    /// <summary>
    /// OrganizationStreet as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("OrganizationStreet", scrubHtml: true) etc.
    /// </summary>
    public string OrganizationStreet => _item.String("OrganizationStreet", fallback: "");

    /// <summary>
    /// OrganizationZip as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("OrganizationZip", scrubHtml: true) etc.
    /// </summary>
    public string OrganizationZip => _item.String("OrganizationZip", fallback: "");

    /// <summary>
    /// OwnerMail as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("OwnerMail", scrubHtml: true) etc.
    /// </summary>
    public string OwnerMail => _item.String("OwnerMail", fallback: "");

    /// <summary>
    /// OwnerMailTemplateFile as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("OwnerMailTemplateFile", scrubHtml: true) etc.
    /// </summary>
    public string OwnerMailTemplateFile => _item.String("OwnerMailTemplateFile", fallback: "");

    /// <summary>
    /// RegistrationPage as link (url). <br/>
    /// To get the underlying value like 'file:72' use String("RegistrationPage")
    /// </summary>
    public string RegistrationPage => _item.Url("RegistrationPage");

    /// <summary>
    /// Get the file object for RegistrationPage - or null if it's empty or not referencing a file.
    /// </summary>
    public IFile RegistrationPageFile => _item.File("RegistrationPage");

    /// <summary>
    /// Get the folder object for RegistrationPage.
    /// </summary>
    public IFolder RegistrationPageFolder => _item.Folder("RegistrationPage");

    /// <summary>
    /// UseCategories as bool. <br/>
    /// To get nullable use .Get("UseCategories") as bool?;
    /// </summary>
    public bool UseCategories => _item.Bool("UseCategories");
  }
}