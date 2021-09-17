USER OPENS:
-Does data exist?
--No, go get data from remote server
--Yes
----In the background: is my data out of date?





# Cultural Audio
## A platform for sharing audio tours
### developed by the Catawba Cultural Center

#### How it works:
##### Create an .md in the /temp folder for each stop you want on the tour.
```
example_stop.md
another_stop.md
```

Follow this format closely:
```
# An Example Stop
## example.mp3
### https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg

These .md files should be thought of as subsets of markdown. It only accepts 4 lines (types? arguments?)

The first is a line that starts with "#": this indicates the TITLE that will appear when users see the stop on the app

The "##" indicates the audio file. Currently these must be the name of an MP3 file in the /temp folder: 'example.mp3'

The "###" indicates the image file.
<!-- TODO: is this still true? -->
Currently these can be either remote resources (i.e. starting with "http") or local resources.

Every subsequent part of the .md file should just be text seperated by an empty line. This indicates the text (or transcript) of the stop.

To clarify, each paragraph of this .md file that doesn't start with '#', '##', or '###' will be rendered as a paragraph of the Stop Text (also called 'text' or 'transcript' as it corresponds to the recorded text in the audio file)
```

##### If you reference a .mp3 file, be sure to add it to the /temp folder
Currently the repo doesn't handle remote .mp3 resources

##### If you reference a local image file, be sure to add it to the /temp folder
Currently the repo SHOULD handle .jpg image files

### Create assets by running `npm run build:assets`

TODO: make it work for iOS
TODO: make it work for web
