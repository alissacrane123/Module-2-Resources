<!-- TOC -->

- [Managing Files with the command line and the graphical user interface.](#managing-files-with-the-command-line-and-the-graphical-user-interface)
  - [Glossary](#glossary)
  - [Changing to a directory](#changing-to-a-directory)
  - [Showing the contents of a folder](#showing-the-contents-of-a-folder)
  - [Making a new folder/directory](#making-a-new-folderdirectory)
  - [Opening a file or folder in VSCode](#opening-a-file-or-folder-in-vscode)
  - [Opening a file or folder in a graphical file manager](#opening-a-file-or-folder-in-a-graphical-file-manager)
  - [Copying and Moving Files](#copying-and-moving-files)
  - [Deleting files](#deleting-files)
  - [Deleting a single folder](#deleting-a-single-folder)
  - [Unzipping and zipping files](#unzipping-and-zipping-files)
  - [Downloading files with curl](#downloading-files-with-curl)

<!-- /TOC -->

# Managing Files with the command line and the graphical user interface.

Most computer users use a graphical file manager to manage files.

On macOS, this is "Finder". On Windows this is "Windows Explorer", on the Ubuntu Desktop they simply call it "File Manager".

However, it is possible to manage all the files and folders on your computer
from the unix command line.

This document is a reference guide to how to do various file management tasks
on all three OSes, and how to bridge the gap between the command line and the
graphical user interface on each OS.

First some terms:

## Glossary

__File Manager__ - A Graphical program for creating folders, copying/moving and renaming your files.

__Command Line__ - the unix command line you interact with inside a Terminal application

__Folder/Directory__ - These words are interchangable and mean the same thing. Directory is the older term which existed before there were graphical operating systems. When the Macintosh brought the graphical user interface to computing in 1984, they choose the icon representing a folder for a directory. A folder can contain files or other folders.

__Path__ - A textual way of describing part of a folder heirarchy. In unix we separate the folders in a path with the forward slash character `/`. 

__Home Directory__ - The default directory for a user. This is where the user should be storing thier files. The shorthand for the home directory is the `~` 
character.

- macOS: The home directory on macos is located at `/Users/<username>`
- Ubuntu Desktop: Nearly all linux systems use `/home/<username>` as your home directory
- Windows: Windows has a _Windows Home Directory_ on the `C:` drive, but WSL has a home directory in the same location it is in Ubuntu Linux, in `/home/<username>` We recommend storing your coding files inside the Linux home directory, and not in the Windows home directory. (Microsoft also recommends this). If you do need to access the Windows home directory from WSL it's located at `/mnt/c/Users/<username>` where username is your Windows user name.

__Current Directory__ - The directory your terminal is currently "in". This is also known as the "Working Directory". A shortcut to it is the period character `.`

__Parent Directory__ - the directory ABOVE the current directory in the file hierarchy. A shortcut to it is  double period. `..`

## Changing to a directory

Just like you need to have a window open viewing the files you want to manage in
a graphical file manager, you will also want to have your command line "open" at
a specific folder.

`cd <path>`

Normally your command line's *PROMPT* will display the current path, but you 
can also find it out at any time by typing

`pwd`

## Showing the contents of a folder

Use the `ls` command to list files and folders.

```shell
ls
```

Useful flags for `ls` are `-l` and `-a`. `-l` lists the files out in _long format_
while `-a` makes `ls` list _hidden files_. In unix files that begin with a period `.` are hidden from `ls` by default.

This is a common `ls` command many people use

```shell
ls -al
```

## Making a new folder/directory

To create a folder, you use the `mkdir` command.

`mkdir <folderName>`

You can feed a long path that doesn't exist into `mkdir` but you must give it
the `-p` flag to get it to create the parent folders.

`mkdir -p <some long path>`

You can also make multiple folders at the same time by separating them with spaces.

`mkdir <folder> <folder>`

## Opening a file or folder in VSCode

To open a file or folder in VSCode we can use the `code` command.

We can use the magic unix `.` path to specify the current folder.

```
code .
```

Or we can specify a specific path to a file or folder.

```
code <path>
```

## Opening a file or folder in a graphical file manager

There is no standard command for opening up a file into a graphical
file manager that works across every OS. So here are the commands for each OS.

- __macOS__ - You can use the command `open` to open Finder

```shell
open <path>
```

- __Windows with WSL__ - You can use the command `explorer.exe` to open Windows Explorer

```shell
explorer.exe <path>
```

- __Ubuntu Desktop__ - You can use the command `xdg-open` to open the File Manager

```shell
xdg-open <path>
```

When you run these commands, your operating system will open up the path
you gave it using the graphical file manager.

## Copying and Moving Files

To copy a file or folder use the `cp` command or the `mv` command to move the file instead.

```shell
cp <source path> <destination path>
mv <source path> <destination path>
```

If you want to copy a folder and ALL it's contents, you'll need to add some
flags for `cp` (you don't need them for mv)

```shell
cp -a <source path> <destination path>
```

One thing that is useful for unix commands is to add the `-v` (verbose) flag.
This causes commands to be more chatty and print more output letting you know what's happening. This is especially useful when copying lots of files.

```shell
cp -a -v <source path> <destination path>
```

## Deleting files

To delete a file you use the `rm` command. You cannot delete folders with `rm`, only files.

```shell
rm <path to file>
```

However, you can _recursively_ delete folders with `rm`. (Be careful with this
command, make sure you are deleting what you mean to delete, unlike the graphical file manager, the command line doesn't have a Trash Can or Recycle Bin)

```shell
rm -r <path to folder>
```

One useful option is the `-i` flag, which causes rm to prompt for every removal, so
if you aren't sure if you have the path correct, use `-i`.

Also remember to use `-v` to get rm to print out the files it's deleting.

```shell
rm -r -i -v <path to folder>
```

## Deleting a single folder

You can use the `rmdir` command to delete a folder.  However this folder **MUST BE EMPTY** before you can do this.

```shell
rmdir <path to folder>
```

## Unzipping and zipping files

Sometimes you may want to unzip a `.zip` file or zip a folder into a new `.zip` file.

```unzip <path to zip file>```


You can peek inside the zip file without unzipping it like this:

```unzip -t <path to zip file>```

You can zip up a folder like so: 

```zip -r <zipfilename.zip> <folder>```

Note: you must be one directory ABOVE the folder in the heirarchy before you do this. The `-r` flag is needed for zip to recursively zip up all the files.

## Downloading files with curl

The curl command can take a URL and download it to a file on your computer.

```curl -o <filename> <url>```

