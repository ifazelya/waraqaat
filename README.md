بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ<br>
ٱلْـحَمْدُ لِلّٰهِ رَبِّ ٱلْعَٰلَمِينَ<br>
ٱللّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ<br>




# waraqaat pdfs

### _What is this website_?

This is a __repository__ (think a storage container for files and folders over the internet) made in order to share the process and results of PDF generation for Al-Waraqaat.

# The process:

## Tools:

- A computer
- Code editor (VS Code, Cursor)
- HTML, CSS, JavaScript (Puppeteer library), Node.js
- ChatGPT 4o (preferrably premium for unlimited messaging)
- PDF Preview

## Steps:

1. Figuring out tooling

Google Docs was a clear first choice and, while being very convenient, began to prove itself difficult in terms of styling as it required a copious amount of time and manual effort.

After researching and trying various tools including but not limited to: markup lanugages (LaTeX), word processors (Pages, Docs), and various web tools, we had settled on using HTML due to its versatility and effeciency.

The next problem was PDF conversion. Traditional Export to PDF became more buggy the larger the document became. 
A small Puppeteer in JavaScript was used to resolve this.<br><br>
  
2. Figure out styling

This takes a couple hours, using GPT , to figure out ideal fonts, coloring, sizing, headers, styling, and so much more.
The goal is to find a consistent style language that is readable.<br>

<img width="422" height="224" alt="image" src="https://github.com/user-attachments/assets/cc6cef7b-aa79-47e7-9cba-90aedafac518" />

<img width="312" height="230" alt="image" src="https://github.com/user-attachments/assets/c23a8128-e9b4-42e9-b112-895778ad4fde" />

<img width="304" height="236" alt="image" src="https://github.com/user-attachments/assets/43df469e-ed35-4123-9c31-4a5212a78d38" />

The CSS and HTML that was used for the "Usool ul-Fiqh" document was not by any means perfect, but serves a good jumping off point for future projects. (usoolcopy.html)
<br>

This also included the bilingual column format, having the logo appear on every page, the background image, and more. 
<br><br>

3. The actual process

 This requires some prompt engineering ability.
 This is essentially:
- Copying a paragraph or two from the original document (using best judgment of what makes sense as a section, and ensuring it isn't too much text for GPT to handle (again should be no more than 8-9 lines full of text)) (( __CAN ALWAYS EDIT LATER__ ))
- Pasting into GPT with specific prompts based off the context
- Copying its output into the your code editor
- Running the JS script to ensure proper formatting
- View the PDF preview
- Repeat

  <br><br>

 <img width="268" height="457" alt="image" src="https://github.com/user-attachments/assets/eb7997bc-6bd1-4f42-945e-05a746c2cd77" /> <br>
Using projects gives GPT context to make better decisions (especially when needing to start new chats as long chats start to cause computer lag)<br>

<img width="658" height="276" alt="image" src="https://github.com/user-attachments/assets/2fefd85c-4d77-456a-bc72-0924bebbaac8" /> <br>
Upload the file to give GPT CSS context.<br>

<img width="812" height="674" alt="image" src="https://github.com/user-attachments/assets/631b459f-6f3c-4203-81b6-4d27a33a1e4b" />  <br>
BIG chunk of text...
Sectioned off at what we thought would be a good point.<br>

<img width="723" height="610" alt="image" src="https://github.com/user-attachments/assets/a756b68e-7017-4121-aaa5-d05f0a8dbbe5" /> <br>
Note the prompt seems a little strange... this takes some getting used to and will be different everytime. <br>
We were running into an issue with GPT "paraphrasing" the arabic text which was an absolute no-go.<br>
Easy copy button.<br> <br>


<img width="767" height="377" alt="image" src="https://github.com/user-attachments/assets/2ebf4b6e-a36c-4453-849a-d4d4979821d6" /> <br>
The format of the HTML is a bit much to explain, look through it if desired, but just paste the GPT output into its proper place.<br><br>

<img width="599" height="703" alt="image" src="https://github.com/user-attachments/assets/aa4266ec-61d5-4178-bef9-c9ad54d6de84" /> <br>
This is the Puppeteer script. Run in the terminal using node. <br><br>

<img width="934" height="668" alt="image" src="https://github.com/user-attachments/assets/fc77a7d7-7922-4202-b375-c5190c70cce8" /> <br>
After the script runs, ALT+TAB a couple times and you'll notice the PDF refresh with the updated code.<br> <br>

Bi-faḍlillāh, this was how the Usool ul-Fiqh document was completed.













