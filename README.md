# UFO-Sightings-Analysis




## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Timeline](#timeline)
- [Resources](#resources)
- [Credits](#credits)
- [Contact](#contact)


## Description
We investigated UFO sightings and their frequencies. Our aim is to determine which states have the most UFO sightings and which have the fewest. Secondary to this, we’ll analyze data to determine if UFO sightings are most common in the United States of America or other countries. We will use a comprehensive dataset from the National UFO Reporting Center and generate visuals based on our findings with Python, SQL, Data Visualization, and Project Management.<br>

**Project Objective:**
Our project delves into the enduring discourse surrounding UFOs, now commonly referred to as UAPs (Unidentified Aerial Phenomena), which has captivated public interest for centuries. With access to a dataset compiled from reports of UFO sightings and their geographical locations, our team aims to uncover underlying patterns within these occurrences. Our analysis will focus on addressing the following inquiries:

1. Identifying the top 5 and bottom 5 states in the USA with the highest UFO sighting frequencies.
2. Comparing UFO sighting trends in the USA with those reported in other countries.
3. Determining the most commonly reported UFO shapes in the USA.

Additionally, we will explore regional variations in reported sightings and the typical times at which these sightings occur.


The dataset utilized for this analysis was sourced from the National UFO Reporting Center (NUFORC). Our team selected the "Highlighted Reports" dataset for its ease of management and superior data quality in comparison to the comprehensive "All Reports" dataset. Per the website: "NUFORC staff review each report, and highlight a small subset of what we feel to be the most credible or interesting cases.   These tend to be reports from trained observers such as pilots, reports of anomalous structured craft seen at close distances, and reports with interesting and clear video or photographic evidence.   To date,  reports received since April 2023 have been reviewed for highlighting.   We are working our way backwards through older reports to identify more such cases, and will be updating the online database periodically as they are marked."


## Installation
Python, Pandas, Matplotlib, Plotly, HTML, Beautiful Soup, Jupyter Notebook

## Usage
The dataset utilized for this analysis was sourced from the National UFO Reporting Center (NUFORC). Our team selected the "Highlighted Reports" dataset for its ease of management and superior data quality in comparison to the comprehensive "All Reports" dataset. (https://nuforc.org/databank/)

During the course of our analysis, we encountered several challenges, including flawed data entry attributed to human error and limitations associated with the dataset being restricted to "Highlighted Reports" only. Despite efforts to mitigate these challenges, some data inconsistencies persisted, such as missing headers and incorrectly spelled column names. Additionally, technical issues were encountered with the interactive drop-down feature, implemented using Flask, JavaScript, and HTML.

![script](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/472f4c0c-4f91-4fe7-b241-37eadf830299)
![html](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/54fee4af-7bbc-4065-963a-db7636cd474d)
![app](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/556377d4-483d-440e-97d5-9ec9690de873)


**Ethical Considerations:**
Our project prioritizes ethical considerations, particularly regarding the privacy and anonymity of individuals who reported UFO sightings. We are committed to safeguarding their personal information and avoiding any disclosure of personally identifiable information (PII) without explicit consent. Furthermore, we uphold the principles of data integrity by rigorously verifying the accuracy and reliability of the dataset to maintain its credibility throughout the analysis process.

### Files
- Wescraping and plotting: **UFO_webscraping_highlights.ipynb**
- Database Creation: Resouces directory --> **highlighted_data.sql** **highlighted_data.csv**
- Interactive links: **hourly_sightings_bar.html**, **ufo_sightings.html**, **ufo_sightings_heatmap.html**; Also available to view in jupyter notebook file
- Attempted interactives: [app.py]; static directory; templates directory

## Features
* Web Scraping (Jupyter Notebook and BeautifulSoup)
* SQL (PostgreSQL)
* Data Visualization (Jupyter Notebook and Bubbly)
* Project Management (ClickUp)

### Engineering
**Web Scraping** URL = 'https://nuforc.org/subndx/?id=highlights' the 'Highlighted NUFORC Reports' (Jupyter Notebook and BeautifulSoup)
  ![engineering1](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/6b3ad6a4-c303-414c-8994-2aeb903745cd)

**SQL (PostgreSQL)**
![highlighted_data_table](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/8181a2d1-1eed-4c27-a517-a672f2221dda)
![ufo_sightings_db](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/c08e1833-8e3b-45b3-82d0-260968453728)

### Visualizations
**HOW DO UFO SIGHTINGS IN USA COMPARE TO OTHER COUNTRIES**
![countries](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/68ed6254-b474-4e3b-b56e-b2151ea88d3b)

**TOP 5 AND BOTTOM 5 STATES IN THE USA FOR SIGHTINGS?**
![bottom5](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/5a0d87a8-a2db-4817-a510-7b8ff12cf4f2)
![top5](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/5fa0e562-8924-43d8-8694-f8a65dc1865b)

**WHICH UFO SHAPES ARE MOST FREQUENTLY SIGHTED IN THE USA?**
![shapes](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/47e468d9-f8f1-4a56-aa8d-0ad1bd211087)

### Interactive Visualizations
![bubblechart](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/3664612f-8213-48e5-bee8-c46b6b0304ca)
![sighting_times](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/60a45170-81b9-43f1-a4e4-b3bd552096ef)
![scatter](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/793d984b-4384-45ff-9cb4-7f85445061d4)
![interactive_scatterplot](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/e50bca33-263c-4ab3-a494-45a9b5fee408)
![heatmap](https://github.com/teelam1910/UFO_Sightings_Analysis/assets/132629216/ec99475d-da36-40f6-a194-05e40120ad38)

### Final Findings
In summary, our analysis of UFO sightings data from the National UFO Reporting Center (NUFORC) reveals significant findings. The top five states for sightings in the USA are Arizona, Florida, Pennsylvania, Illinois, and Texas, while the bottom five are West Virginia, New Mexico, Missouri, Hawaii, and Puerto Rico. Compared to other countries, the USA shows a notably higher frequency of sightings. Light-shaped objects are most commonly reported, followed by orbs. The west coast, particularly Washington, Oregon, and California, exhibits a higher concentration of sightings, with peak sightings occurring between 7 and 8 pm. These insights contribute to our understanding of UFO phenomena and may guide future research.

Given more time for project adjustments and with more experience, we would explore alternative methods to upload our data into a SQL database for easier access by others. We learned when sharing CSV files online , we encountered some security constraints that made direct access to the data on Postgresql difficult, and it required other users to adjust various options to gain access. We would have also just  created another column to add a unique identifier(key) for each individual sighting. It would have been interesting to dive into State and/or City specific findings as well. We would also consider utilizing JSON files or an API, potentially minimizing complications encountered when utilizing the d3 library for plotting purposes.



## Timeline 
(with Due Dates)
- Monday (4/8): Project Proposal (Angelica & Taryn)
- Wednesday (4/10): Web Scraping & Github Repository  (Tiffany)
- Friday (4/12): Clean UFO Sightings Data (Tiffany)
- Sunday (4/14): Research Interactive Feature Methods (Taryn) & Create A SQL Database (Angelica)
- Wednesday (4/17): Data Visualizations & Interactive Feature (Taryn & Tiffany)
- Thursday (4/18): Update ReadME (Angelica, Taryn, Tiffany) & PowerPoint Presentation (Tiffany)

<img width="665" alt="image" src="https://github.com/teelam1910/UFO_Sightings_Analysis/assets/152451436/68204603-d7dd-4560-b5e1-562a6c08c7cc">

## Resources
- https://nuforc.org/databank/
- https://clickup.com/noRedirect=true&_gl=*ho0b2x*_gcl_au*MjY3NDM2MDMuMTcxMjYzMjc2MQ
- EdX/ASU Tutoring
- Instructor
- AI
- How to Use Selenium to Web-Scrape with Example: https://towardsdatascience.com/how-to-use-selenium-to-web-scrape-with-example-80f9b23a843a
- How to perform Web Scraping using Selenium and Python: https://www.browserstack.com/guide/web-scraping-using-selenium-python
- Python Requests Module: https://www.w3schools.com/python/module_requests.asp
- How to Scrape Multiple Pages of a Website Using Python?: https://www.geeksforgeeks.org/how-to-scrape-multiple-pages-of-a-website-using-python/#google_vignette
- How to Scrape Multiple Web Pages Using Python: https://www.freecodecamp.org/news/how-to-scrape-multiple-web-pages-using-python/
- Get the data type of column in Pandas – Python: https://www.geeksforgeeks.org/get-the-data-type-of-column-in-pandas-python/
- Get a list of a particular column values of a Pandas DataFrame: https://www.geeksforgeeks.org/get-a-list-of-a-particular-column-values-of-a-pandas-dataframe/
- https://www.naturalearthdata.com/downloads/10m-cultural-vectors/
- https://hvplot.holoviz.org/getting_started/hvplot.html
- https://www.linkedin.com/pulse/how-deploy-html-website-github-deekshith-h-r-gh9zc/
- https://flask.palletsprojects.com/en/3.0.x/tutorial/
- https://flask.palletsprojects.com/en/3.0.x/tutorial/templates/
- https://plotly.com/python/
- https://jupyter.org/widgets#:~:text=Notebooks%20come%20alive%20when%20interactive,a%20model%20impacts%20the%20results.
- https://www.geeksforgeeks.org/interactive-graphs-in-jupyter-notebook/
- https://github.com/AashitaK/bubbly
- https://www.kaggle.com/code/aashita/guide-to-animated-bubble-charts-using-plotly 


## Credits
Angelica Gutierrez, Tiffany La Mar, Taryn Pope




## Contact
If there are any questions of concerns, we can be reached at:
##### [github: @teelam19](https://github.com/@teelam19)
##### [email: tiffanylamarj@gmail.com ](mailto:tiffanylamarj@gmail.com )
##### [email: angelicabgutierrezcortez@gmail.com ](mailto:angelicabgutierrezcortez@gmail.com )
##### [email: taryn.pope1@gmail.com ](mailto:taryn.pope1@gmail.com )
