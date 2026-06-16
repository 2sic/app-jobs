<image src="app-icon.png" align="right" width="200px">

# Jobs 3 App for .net CMSs

> This is a [2sxc](https://2sxc.org) App for [DNN ☢️](https://www.dnnsoftware.com/) and [Oqtane 💧](https://www.oqtane.org/)

| Aspect              | Status | Comments or Version
| ------------------- | :----: | -------------------
| 2sxc                | ✅    | requires 2sxc v17.07.00
| Dnn                 | ✅    | For v9.6.1+
| Oqtane              | ✅    | Requires v05.00+
| No jQuery           | ✅    | 
| Live Demo           | ➖    |
| Install Checklist   | ✅    | See [Installation] on [azing.org](https://azing.org/2sxc)
| Source & License    | ✅    | included, ISC/MIT
| App Catalog         | ✅    | See [app catalog](https://2sxc.org/en/apps/app/jobs-app-v2-hybrid-for-dnn-and-oqtane)
| Screenshots         | ✅    | See [app catalog](https://2sxc.org/en/apps/app/jobs-app-v2-hybrid-for-dnn-and-oqtane)
| Best Practices      | ✅    | Uses v13.10 conventions
| Bootstrap 3         | ✅    | optimized
| Bootstrap 4         | ✅    | optimized
| Bootstrap 5         | ✅    | optimized

## Quick Intro To The Jobs App for DNN
A [DNN App][2sxc] is like a DNN module, just way better :). Since this is an open-code/open-source 2sxc-app, you can customize it to be anything you want! This list just shows what it already does, so you know what you get out-of-the-first-box.

Because it's so simple and uses 2sxc, you can easily
* [translate it into any other language in minutes][translate]

## Getting Started

This app is only useful is you use DNN. So assuming you have a DNN installation, all you need to do is install 2sxc and this app. 

* Now you can use this app as-is, or customize it to be whatever you need it to be. 

* It probably helps to review the [Overview][overview] about how the parts play together by default, so you can then change as little as necessary to get it to do what you want

## Customize the App

The Source Code is all here - so you can easily customize to your hearts desire!

---

## History

* 2021-11
  * Updated to v12 best-practices
  * Removed all jQuery dependencies
  * Hybrid - now works in Dnn and Oqtane
  * Enabled data-optimizations
* 2022-04
  * Moved access of Services to ToSic.Sxc.Services
  * Replaced data-enableoptimization with pageSvc.AssetAttributes()
* v.02.02.00 2022-06
  * Replaced all base classe with their 2sxc 14 equivalents
  * Removed all GetService<> and started to use the new ServiceKit14
* v03.00.00 2023-03
  * Added Registration Formular with App Settings
  * Started to use the new Hybrid.Api15
* v03.04.00 2023-05
  * Replaced turnOn Tag with `Kit.Page.TurnOn`
  * Enhanced Kit.Image with `imgAltFallback`
  * Replace Edit.TagToolbar(Content) Tag with `@Kit.Toolbar.Default(Content)`
* v03.05.00 2023-07
  * 2sxc 16.02 coding conventions
  * everything typed
* v03.05.01 2023-11
  * Bugfix Multiple File Upload (Conversion to type was wrong)
* v03.17.00 2024-04
  * strong typed
  * Auto Generated Class
  * Typed MyItem
* v03.17.01 2024-07
  * Update app.sln and app.csproj
* v03.21.00 2026-03
  * Added intellisense Extensions for Visual Studio Code
* v03.21.01 2026-06
  * Switched from webpack to Vite for faster builds
  