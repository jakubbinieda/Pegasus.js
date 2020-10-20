<h1 align="center">Pegasus.js</h1>
<p align="center">A user-friendly tool for creating galleries on your website from Google Drive folders</p>
<p align="center">
	<img src="https://img.shields.io/static/v1?label=Version&message=0.0.1&color=informational&style=flat-square">
	<img src="https://img.shields.io/static/v1?label=Difficulty&message=Easy&color=success&style=flat-square">
	<img src="https://img.shields.io/static/v1?label=Licence&url=https://github.com/jakubbinieda/Pegasus.js/blob/main/LICENSE&message=MIT&color=blueviolet&style=flat-square">
</p>

## Why use Pegasus and Google Drive?
Running a website on a budget is difficult, and the disk space can be expensive. Unfortunately, photos weigh a lot. Luckily Google gives us 15GB of that precious space for free! Pegasus is a lightweight tool that can import those photos and place them on your website.

## Installation

#### Step 1: Get your Google API Key
First of all, you have to follow [this Google guide](https://developers.google.com/drive/api/v3/about-sdk "this Google guide") to create a project, activate Google Drive API and get your API Key. If you already have it, you are good to go.

#### Step 2: Create public folder on Google Drive
This part is pretty straight-forward. Open your Drive, create a folder and set it for anyone to view. Then put your photos inside. Then open the folder and from URL get the ID. For example, if your URL is: 
###### https://drive.google.com/drive/u/0/folders/Pegasus-is-so-easy

Then your folder ID is:
###### Pegasus-is-so-easy

#### Step 3: Get your Pegasus source code

Option 1:
Download the files from [here](http://https://github.com/jakubbinieda/Pegasus.js "here") and put it into your website directory. Then include them like this:
```html
<html>
	<script src="/path-to-the-file/pegasus.js"></script>
	<link rel="stylesheet" href="/path-to-the-file/pegasus.css">
</html>
```
Option 2:
Import files from our GitHub repository like this: 
```html
<html>
	<script src="https://cdn.jsdelivr.net/gh/jakubbinieda/pegasus.js@v0.0.1/pegasus.js"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jakubbinieda/pegasus.js@v0.0.1/pegasus.css">
</html>
```
## Usage

Now the hard part is over. There are two ways to use the Pegasus: simple and simpler. But first of all, you have to create a div element with id pegasusGallery.
```html
<div id="pegasusGallery">
</div>
```
Then the simpler option requires only two things: API Key and folder ID. You run it by just activating pegasus function with those two variables.
```javascript
<script>
	pegasus("APIkey", "folderID");
</script>
```
If you want more customization from your gallery, you can use the simple option, which additionally requires you to specify the photos heights and distance between them. The default values of them are 40vh and 2px.
```javascript
<script>
	pegasus("yourAPIkey", "yourFolderID", "30vh", "10px");
</script>
```
## Examples
Coming soon... :eyes:

## Licence 
Pegasus.js is avaliable with [MIT License](https://github.com/jakubbinieda/Pegasus.js/blob/main/LICENSE "MIT License")

