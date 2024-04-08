// DO NOT MODIFY THIS FILE - IT IS AUTO-GENERATED
// See also: https://go.2sxc.org/copilot-data
// To extend it, create a "Category.cs" with this contents:
/*
namespace AppCode.Data
{
  public partial class Category
  {
    // Add your own properties and methods here
  }
}
*/

// Generator:   CSharpDataModelsGenerator v17.06.02
// App/Edition: Jobs/
// User:        2sic Web-Developer
// When:        2024-04-08 07:53:49Z
namespace AppCode.Data
{
  // This is a generated class for Category 
  // To extend/modify it, see instructions above.

  /// <summary>
  /// Category data. <br/>
  /// Generated 2024-04-08 07:53:49Z. Re-generate whenever you change the ContentType. <br/>
  /// <br/>
  /// Default properties such as `.Title` or `.Id` are provided in the base class. <br/>
  /// Most properties have a simple access, such as `.Key`. <br/>
  /// For other properties or uses, use methods such as
  /// .IsNotEmpty("FieldName"), .String("FieldName"), .Children(...), .Picture(...), .Html(...).
  /// </summary>
  public partial class Category: AutoGenerated.ZagCategory
  {  }
}

namespace AppCode.Data.AutoGenerated
{
  /// <summary>
  /// Auto-Generated base class for Default.Category in separate namespace and special name to avoid accidental use.
  /// </summary>
  public abstract class ZagCategory: Custom.Data.CustomItem
  {
    /// <summary>
    /// Key as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("Key", scrubHtml: true) etc.
    /// </summary>
    public string Key => _item.String("Key", fallback: "");

    /// <summary>
    /// Name as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("Name", scrubHtml: true) etc.
    /// </summary>
    public string Name => _item.String("Name", fallback: "");
  }
}