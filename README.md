## 🚀 Notes

### Convert EPS files to SVG, PDF or image formats.

See this link:
https://www.victorianodejesus.com/viewing-and-converting-eps-and-ai-files-in-linux/

GhostScript is already installed on the system. Simply run the following command from above link for conversion:

gs -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=business-card.pdf business-card.ai
