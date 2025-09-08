# colab-purple-pause
Browser userscript that turns the Google Colab favicon purple whenever a cell is blocked waiting for user input (e.g. Hugging-Face token prompt).   Never again forget to paste that token while you’re on YouTube.
# Colab Input Notifier Extension

> A simple but essential Chrome extension that changes the Google Colab tab icon to a custom "input required" state, so you never miss a prompt again!

![video](video.mp4) 

## The Problem

Have you ever run a long Colab script, switched to another tab to watch a video, and returned an hour later only to find it's been waiting for your Hugging Face token for the last 67 minutes? (get it? 67?) The default "running" icon doesn't change, giving you no visual cue that your action is needed.

## The Solution

This extension constantly monitors your Colab page. When it detects an `input()` prompt (like the ones for API keys or tokens), it instantly swaps the tab's favicon. When the prompt is gone, it swaps it back. It's a simple, at-a-glance status update that saves you time and frustration.

## Installation (Manual)

Since this is not on the Chrome Web Store, you can load it manually in 2 minutes:

1.  **Download:** Click the green `<> Code` button on this page, then choose **Download ZIP**.
2.  **Unzip:** Unzip the downloaded file. You will have a folder named `colab-input-notifier-extension-main` (or similar).
3.  **Open Chrome Extensions:** In Chrome, navigate to `chrome://extensions`.
4.  **Enable Developer Mode:** In the top-right corner, turn on the **"Developer mode"** switch.
5.  **Load the Extension:** Click the **"Load unpacked"** button that appeared.
6.  **Select the Folder:** In the file browser, select the unzipped folder (the one containing `manifest.json`).
7.  **Done!** The extension is now installed and active. It will automatically work whenever you are on a Google Colab page.

---
## Are you suspicous?
Feel free to scan at https://virustotal.com/ or even check the codes contents!
