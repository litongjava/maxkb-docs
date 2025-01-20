# Max Kb Api Docs - Sarch

## API 概述

MaxKB 搜索 API 允许用户通过简单的 HTTP 请求在指定类别和语言中进行多样化的搜索。该 API 支持选择搜索引擎、设定搜索范围、结果格式等多种参数，并可通过大语言模型对返回内容进行优化过滤。接口目前处于公测阶段，并发请求无限制。

### 请求示例

下面是一个调用示例，展示如何使用 `curl` 命令进行搜索请求：

```bash
curl --location --request POST 'https://api.maxkb.ai/api/v1/search' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'q=Advertising, Area of Specialization in Creative Track, BS (2024-2025) 4 year in sjsu' \
--data-urlencode 'language=auto' \
--data-urlencode 'time_range=' \
--data-urlencode 'safesearch=0' \
--data-urlencode 'categories=general' \
--data-urlencode 'pageno=1' \
--data-urlencode 'fetch=true' \
--data-urlencode 'limit=3'
```

在上述示例中，API 将根据提供的搜索关键词和参数返回优化后的搜索结果。

---

## 支持的请求参数

以下是本 API 支持的主要参数说明：

1. **q**（必填）：搜索关键词。例如：
   ```text
   q=Advertising, Area of Specialization in Creative Track, BS (2024-2025) 4 year in sjsu
   ```
2. **format**：指定返回结果的格式。常见值有：
   - `json`：以 JSON 格式返回。
   - `rss`：以 RSS 格式返回。
3. **language**：结果语言，可指定具体语言代码或使用 `auto` 自动检测。例如：

   - `en` 表示英文
   - `zh` 表示中文

4. **categories**：搜索类别，支持以下选项：

   - `general`（通用）
   - `news`（新闻）
   - `images`（图片）
   - `videos`（视频）
   - `science`（科学）
   - `it`（技术）

5. **engines**：指定搜索引擎，可选值如 `google`、`bing` 等。如果未指定，将使用默认引擎。

6. **pageno**：搜索结果页码，默认值为 `1`。用于分页获取更多结果。

7. **time_range**：结果的时间范围，可选值包括：

   - `day`
   - `week`
   - `month`
   - `year`

8. **safesearch**：安全搜索级别：

   - `0`：关闭安全搜索
   - `1`：开启安全搜索

9. **autocomplete**：是否启用自动补全功能，取值为 `true` 或 `false`。

10. **locale**：区域设置，例如：

    - `US`（美国）
    - `CN`（中国）

11. **no_cache**：是否禁用缓存：

    - `true` 表示禁用缓存
    - 不填或 `false` 表示使用缓存

12. **fetch**：是否读取网页内容。默认不读取，返回的仅为网页部分内容。设置为 `true` 时，API 将读取网页全部内容。

13. **limit**：优化返回条数。指定时会利用大语言模型对内容进行过滤，调整结果数量至 `limit` 值。设置 `fetch=true` 时该参数生效。

---

## 定向检索

设置 q 参数,添加 site

```
site:sjsu.com Advertising, Area of Specialization in Creative Track, BS (2024-2025) 4 year
```

## 返回数据示例

```json
{
  "data": [
    {
      "content": "content",
      "url": "url",
      "title": "title"
    }
  ],
  "msg": null,
  "code": 1,
  "error": null,
  "ok": true
}
```

```json
{
  "data": [
    {
      "content": "Skip to Content\nSAN JOSÉ STATE UNIVERSITY\nVISIT\nAPPLY\nGIVE\nMENU\nSEARCH\nAbout\n \n\n\n \t\t \t\n \t\nSelect a Catalog\n2024-2025 Academic Catalog\nMyRoadmaps Catalog\n2023-2024 Academic Catalog [ARCHIVED CATALOG]\n2022-2023 Academic Catalog [ARCHIVED CATALOG]\n2021-2022 Academic Catalog [ARCHIVED CATALOG]\n2020-2021 Academic Catalog [ARCHIVED CATALOG]\n2019-2020 Academic Catalog [ARCHIVED CATALOG]\nMyRoadmaps Catalog\n\n\nCatalog Search\nSelect an option\nCourses\nPrograms\nDepartments and Colleges\nPolicies and Procedures\nEntire Catalog\nEntire Catalog\nS\nearch\n Whole Word/Phrase\nAdvanced Search\n\n\nCatalog Home\n4-Year Roadmaps (2024-2025)\n4-Year Roadmaps Archive\nUndergraduate Advisor Directory\nAssociate Degrees for Transfer (ADT)\nADT Transfer Roadmaps Archive\nADT Transfer Advisor Directory\nSpartan Accelerated Graduate Education (SAGE) Scholars Programs\nSAGE Roadmaps & Advisor Directory\nCalifornia Promise\nCredit by Examination\nGeneral Education Requirements\nUndergraduate University Graduation Requirements\nAdvising Hub\nArticulation\nClass Schedules\nRegistrar’s Office\n\n\nMy Favorites\n\t\nAdd to My Favorites (opens a new window)\nShare this Page\nPrint (opens a new window)\nHelp (opens a new window)\n4-Year Roadmaps (2024-2025)\n\n\n\n\n\nClick the “Print Degree” icon on a roadmap page to save a PDF on your desktop or to print a physical copy to take advising notes.\n\nSorted by College | Sorted by Department \n\n•  Advertising, Area of Specialization in Creative Track, BS (2024-2025)\n•  Advertising, Area of Specialization in Management Track, BS (2024-2025)\n•  Advertising, Area of Specialization in Marketing Communications Track, BS (2024-2025)\n•  Aerospace Engineering, BS (2024-2025)\n•  African American Studies, BA (2024-2025)\n•  Animation & Illustration, BFA (2024-2025)\n•  Animation & Illustration, BFA (5-Year Plan) (2024-2025)\n•  Anthropology, BA (2-Year SJSU Online) (2024-2025)\n•  Anthropology, BA (2024-2025)\n•  Applied Mathematics, Applied and Computational Mathematics Concentration, BS (2024-2025)\n•  Art History and Visual Culture, BA (2024-2025)\n•  Art, Digital Media Art Concentration, BFA (2024-2025)\n•  Art, Photography Concentration, BFA (2024-2025)\n•  Art, Pictorial Art Concentration, BFA (2024-2025)\n•  Art, Spatial Art Concentration, BFA (2024-2025)\n•  Art, Studio Practice Concentration (Preparation for Teaching), BA (2024-2025)\n•  Art, Studio Practice Concentration, BA (2024-2025)\n•  Asian American Studies, BA (2024-2025)\n•  Aviation, Area of Specialization in Aviation Management, BS (2024-2025)\n•  Aviation, Area of Specialization in Flight Operations, BS (2024-2025)\n•  Aviation, Area of Specialization in Maintenance Management, BS (2024-2025)\n•  Aviation, Area of Specialization in Professional Flight, BS (2024-2025)\n•  Behavioral Science, BA (2024-2025)\n•  Biological Sciences - Ecology and Evolution, BS (2024-2025)\n•  Biological Sciences - Marine Biology, BS (2024-2025)\n•  Biological Sciences, BA (2024-2025)\n•  Biological Sciences, Microbiology Concentration with Chemistry Minor, BS (2024-2025)\n•  Biological Sciences, Molecular Biology Concentration with Chemistry Minor, BS (2024-2025)\n•  Biological Sciences, Systems Physiology Concentration with Chemistry Minor, BS (2024-2025)\n•  Biomedical Engineering, BS (2024-2025)\n•  Biomedical Engineering, BS (5-Year Plan) (2024-2025)\n•  Business Administration, Accounting Concentration, BS (2024-2025)\n•  Business Administration, Accounting Information Systems Concentration, BS (2024-2025)\n•  Business Administration, Business Analytics Concentration, BS (2024-2025)\n•  Business Administration, Corporate Accounting and Finance Concentration, BS (2024-2025)\n•  Business Administration, Entrepreneurship Concentration, BS (2024-2025)\n•  Business Administration, Finance Concentration, BS (2024-2025)\n•  Business Administration, General Business Concentration, BS (2-Year SJSU Online) (2024-2025)\n•  Business Administration, General Business Concentration, BS (2024-2025)\n•  Business Administration, Hospitality, Tourism and Event Management Concentration, BS (2024-2025)\n•  Business Administration, Human Resource Management Concentration, BS (2024-2025)\n•  Business Administration, International Business Concentration, BS (2024-2025)\n•  Business Administration, Management Concentration, BS (2024-2025)\n•  Business Administration, Management Information Systems Concentration, BS (2024-2025)\n•  Business Administration, Marketing Concentration, BS (2024-2025)\n•  Business Administration, Operations and Supply Chain Management Concentration, BS (2024-2025)\n•  Chemical Engineering, BS (2024-2025)\n•  Chemistry, BA (2024-2025)\n•  Chemistry, Biochemistry Concentration, BS (2024-2025)\n•  Chemistry, BS (2024-2025)\n•  Chicana and Chicano Studies, BA (2024-2025)\n•  Child and Adolescent Development, Area of Specialization in Community Focus, BA (2024-2025)\n•  Child and Adolescent Development, Area of Specialization in Early Childhood Education, BA (2024-2025)\n•  Child and Adolescent Development, Preparation for Teaching (Plan A), BA (2024-2025)\n•  Child and Adolescent Development, Preparation for Teaching W/CSET Waiver (Plan A), BA (2024-2025)\n•  Chinese, BA (2024-2025)\n•  Civil Engineering, BS (2024-2025)\n•  Climate Science, BS (2024-2025)\n•  Communication Studies, BA (2024-2025)\n•  Communicative Disorders and Sciences, BS (2024-2025)\n•  Computer Engineering, BS (2024-2025)\n•  Computer Science and Linguistics, BS (2024-2025)\n•  Computer Science, BS (2024-2025)\n•  Creative Arts, BA (2024-2025)\n•  Dance, BA (2024-2025)\n•  Dance, BFA (2024-2025)\n•  Data Science, BS (2024-2025)\n•  Design Studies, Area of Specialization in Animation/Illustration, BA (2024-2025)\n•  Design Studies, Area of Specialization in Graphic Design, BA (2024-2025)\n•  Design Studies, Area of Specialization in Industrial Design, BA (2024-2025)\n•  Design Studies, Area of Specialization in Interior Design, BA (2024-2025)\n•  Earth System Science, BS (2024-2025)\n•  Economics, BA (2-year SJSU Online) (2024-2025)\n•  Economics, BA (2024-2025)\n•  Economics, BS (2024-2025)\n•  Electrical Engineering, BS (2024-2025)\n•  Engineering Technology, Computer Network System Management Concentration, BS (2024-2025)\n•  Engineering Technology, Manufacturing Systems Concentration, BS (2024-2025)\n•  English, BA (2024-2025)\n•  English, Creative Writing Concentration, BA (2024-2025)\n•  English, Preparation for Teaching (Single Subject), BA (2024-2025)\n•  English, Professional and Technical Writing Concentration, BA (2024-2025)\n•  Environmental Studies, BA (2024-2025)\n•  Environmental Studies, BS (2024-2025)\n•  Environmental Studies, Preparation for Teaching, BA (2024-2025)\n•  Forensic Science, Biology Concentration, BS (2024-2025)\n•  Forensic Science, Chemistry Concentration, BS (2024-2025)\n•  Forensic Science, Crime Scene Investigation Concentration, BS (2024-2025)\n•  Forensic Science, Digital Evidence Concentration, BS (2024-2025)\n•  French, BA (2024-2025)\n•  Geographic Information Science (GIS), BS (2024-2025)\n•  Geography, BA (2024-2025)\n•  Geology, BS (2024-2025)\n•  Global Studies, BA (2024-2025)\n•  Graphic Design, BFA (2024-2025)\n•  History, BA (2024-2025)\n•  Humanities, American Studies Concentration, BA (2024-2025)\n•  Humanities, Liberal Arts Concentration, BA (2024-2025)\n•  Humanities, Religious Studies Concentration, BA (2024-2025)\n•  Industrial and Systems Engineering, BS (2024-2025)\n•  Industrial Design, BS (2024-2025)\n•  Information Science and Data Analytics, BS (2-Year SJSU Online Program) (2024-2025)\n•  Information Science and Data Analytics, BS (2024-2025)\n•  Information Science and Data Analytics, BS (3-Year SJSU Online Program) (2024-2025)\n•  Interdisciplinary Engineering, BS (2024-2025)\n•  Interdisciplinary Studies, Educational and Community Leadership Concentration (2-Year SJSU Online Program), BA (2024-2025)\n•  Interdisciplinary Studies, Educational and Community Leadership Concentration (3-Year SJSU Online Program), BA (2024-2025)\n•  Interdisciplinary Studies, Health Care Leadership Concentration, BS (SJSU Online) (2024-2025)\n•  Interior Design, BFA (2024-2025)\n•  Japanese, BA (2024-2025)\n•  Journalism, BS (2024-2025)\n•  Justice Studies, BS (2024-2025)\n•  Justice Studies, Criminology Concentration, BS (2024-2025)\n•  Kinesiology, Area of Specialization in Exercise and Fitness Specialist, BS (2024-2025)\n•  Kinesiology, Area of Specialization in Inclusive Physical Activity in Communities, BS (2024-2025)\n•  Kinesiology, Area of Specialization in Individualized Studies, BS (2024-2025)\n•  Kinesiology, Area of Specialization in Rehabilitation Sciences, BS (2024-2025)\n•  Kinesiology, Area of Specialization in Sport Management and Culture, BS (2024-2025)\n•  Kinesiology, Preparation for Teaching, BS (2024-2025)\n•  Liberal Studies, Integrated Teacher Education Program Spanish Bilingual, BA (2024-2025)\n•  Liberal Studies, Integrated Teacher Education Program, BA (2024-2025)\n•  Liberal Studies, Preparation for Teaching (Multiple Subject), BA (2024-2025)\n•  Linguistics, BA (2024-2025)\n•  Materials Engineering, BS (2024-2025)\n•  Mathematics, BA (2024-2025)\n•  Mathematics, Integrated Teacher Education Program (ITEP), BA (2024-2025)\n•  Mechanical Engineering, BS (2024-2025)\n•  Meteorology, BS (2024-2025)\n•  Music, BA (2024-2025)\n•  Music, Composition Concentration, BM (2024-2025)\n•  Music, Jazz Studies Concentration, BM (2024-2025)\n•  Music, Music Education - Choral/General, BM (2024-2025)\n•  Music, Music Education - Instrumental Emphasis, BM (2024-2025)\n•  Music, Performance - Keyboard (Piano), BM (2024-2025)\n•  Music, Performance - Symphonic Instrument, BM (2024-2025)\n•  Music, Performance - Vocal, BM (2024-2025)\n•  Nursing, BS (2024-2025)\n•  Nursing, Concurrent Enrollment Program (CEP) ADN to BSN (2024-2025)\n•  Nursing, Concurrent Enrollment Program (CEP) ADN to BSN, Postbaccalaureate (2024-2025)\n•  Nursing, RN to BSN Concentration, BSN (2024-2025)\n•  Nursing, RN to BSN Concentration, Postbacculaureate (2024-2025)\n•  Nutritional Science, Applied Nutrition and Food Sciences Concentration, BS (2024-2025)\n•  Nutritional Science, Dietetics Concentration, BS (2024-2025)\n•  Nutritional Science, Food Management Concentration, BS (2024-2025)\n•  Packaging, BS (2024-2025)\n•  Philosophy, BA (2024-2025)\n•  Physics, BA (2024-2025)\n•  Physics, BS (2024-2025)\n•  Physics, Preparation for Teaching, BA (2024-2025)\n•  Political Science, BA (2024-2025)\n•  Psychology, BA (2024-2025)\n•  Public Health, BS (2-Year SJSU Online) (2024-2025)\n•  Public Health, BS (2024-2025)\n•  Public Health, Community Health Education Concentration, BS (2024-2025)\n•  Public Health, Population Data Science Concentration, BS (2024-2025)\n•  Public Relations, BS (2-Year SJSU Online) (2024-2025)\n•  Public Relations, BS (2024-2025)\n•  Radio-Television-Film, BA (2024-2025)\n•  Recreation, BS (2024-2025)\n•  Recreation, Recreation Management Concentration, BS (2024-2025)\n•  Recreation, Recreation Therapy Concentration, BS (2024-2025)\n•  Social Science, Preparation for Teaching (Single Subject), BA (2024-2025)\n•  Social Work, BA (2024-2025)\n•  Sociology, BA (2024-2025)\n•  Sociology, Community Change Concentration, BA (2024-2025)\n•  Sociology, Race and Ethnic Studies Concentration, BA (2024-2025)\n•  Software Engineering, BS (2024-2025)\n•  Spanish, BA (2024-2025)\n•  Statistics, BS (2024-2025)\n•  Theatre Arts, BA (2024-2025)\n•  Women, Gender, and Sexuality Studies, BA (2024-2025)\n\n\nAdd to My Favorites (opens a new window)\nShare this Page\nPrint (opens a new window)\nHelp (opens a new window)\n\n\n\n\n\nSan José State University\n\nSJSU on Facebook\nSJSU on Twitter\nSJSU on LinkedIn\nSJSU on Instagram\nSJSU on YouTube\n\nOne Washington Square\nSan José, CA 95192\n408-924-1000\nSJSU Online\nAccessibility\nAccreditation\nTitle IX\nDiversity\nLand Acknowledgement\nPrivacy\nCOLLEGES\nBusiness\nEducation\nEngineering\nGraduate Studies\nHealth and Human Sciences\nHumanities and the Arts\nProfessional and Global Education\nScience\nSocial Sciences\nRESOURCES\nA-Z Index\nAnnual Security Report [pdf]\nBookstore\nCalendars\nCareers and Jobs\nCatalog\nCurrent Students\nEmergency Food & Housing\nFreedom of Speech\nKing Library\nNewsCenter\nParenting Students\nParking and Maps\nCONTACT US\nContact Form\nDirectory\nDoing Business with SJSU\nEmergency Info\nReport a Web Problem\nReport a Title IX Complaint\nAll catalogs © 2025 San José State University. Powered by Modern Campus Catalog™.",
      "url": "https://catalog.sjsu.edu/content.php?catoid=10&navoid=5291",
      "title": "4-Year Roadmaps (2024-2025) - San José State University - Modern ..."
    },
    {
      "content": "Skip to Content\nSAN JOSÉ STATE UNIVERSITY\nVISIT\nAPPLY\nGIVE\nMENU\nSEARCH\nAbout\n \n\n\n \t\t \t\n \t\nSelect a Catalog\n2024-2025 Academic Catalog\nMyRoadmaps Catalog\n2023-2024 Academic Catalog [ARCHIVED CATALOG]\n2022-2023 Academic Catalog [ARCHIVED CATALOG]\n2021-2022 Academic Catalog [ARCHIVED CATALOG]\n2020-2021 Academic Catalog [ARCHIVED CATALOG]\n2019-2020 Academic Catalog [ARCHIVED CATALOG]\nMyRoadmaps Catalog\n\n\nCatalog Search\nSelect an option\nCourses\nPrograms\nDepartments and Colleges\nPolicies and Procedures\nEntire Catalog\nEntire Catalog\nS\nearch\n Whole Word/Phrase\nAdvanced Search\n\n\nCatalog Home\n4-Year Roadmaps (2024-2025)\n4-Year Roadmaps Archive\nUndergraduate Advisor Directory\nAssociate Degrees for Transfer (ADT)\nADT Transfer Roadmaps Archive\nADT Transfer Advisor Directory\nSpartan Accelerated Graduate Education (SAGE) Scholars Programs\nSAGE Roadmaps & Advisor Directory\nCalifornia Promise\nCredit by Examination\nGeneral Education Requirements\nUndergraduate University Graduation Requirements\nAdvising Hub\nArticulation\nClass Schedules\nRegistrar’s Office\n\n\nMy Favorites\n\t\na\nAdd to My Favorites (opens a new window)\nShare this Page\nPrint (opens a new window)\nHelp (opens a new window)\nAdvertising, Area of Specialization in Creative Track, BS (2021-2022)\n\n\n\n Return to: 4-Year Roadmaps (2021-2022)\n\nThe following roadmap is a sample advising map to complete the degree program in four years. Please consult your MyPlanner and major advisor as you develop your individualized academic plan. Students must have completed 60+ units in order to enroll in SJSU Studies courses.\n\nYear 1 | Year 2 | Year 3 | Year 4\n\n\n\nYear 1\nFall Semester (15 units)\nADV 91 - Introduction to Advertising 3 unit(s)\nGE Area A2 3 unit(s)\nGE Area B2/B3 3 unit(s)\nGE Area D+US123 3 unit(s)\nUniversity Elective - Lower or Upper Division 3 unit(s)\nSpring Semester (14 units)\nMCOM 70 - Visual Communication for Modern Media 3 unit(s)\nGE Area A1 3 unit(s)\nGE Area B4 3 unit(s)\nGE Area D+US123 3 unit(s)\nPhysical Education 1 unit(s)\nUniversity Elective - Lower or Upper Division 1 unit(s)\nYear 2\nFall Semester (16 units)\nENGL 71 - Creative Writing 3 unit(s) (C2)\nGE Area A3 3 unit(s)\nGE Area B1/B3 3 unit(s)\nGE Area C1 3 unit(s)\nGE Area F 3 unit(s)\nPhysical Education 1 unit(s)\nWriting Skills Test (WST) - Taken and Passed\nSpring Semester (15 units)\nADV 95 - Working With Type 3 unit(s)\nArt Elective 3 unit(s) *\nGE Area C1 or C2 3 unit(s)\nGE Area E 3 unit(s)\nUniversity Elective - Lower or Upper Division 3 unit(s)\nYear 3\nFall Semester (15 units)\nMCOM 100W - Writing Workshop: Mass Communications 3 unit(s) (Z)\nADV 121 - Strategic Planning/Communications 3 unit(s)\nMCOM 104 - Introduction to Mass Communications Research 3 unit(s)\nADV 93 - Design Fundamentals for Advertising 1 3 unit(s)\nNote: ADV 93 is offered in Fall only.\nUniversity Elective - Lower or Upper Division 3 unit(s)\nSpring Semester (15 units)\nADV 124 - Copywriting 3 unit(s)\nMCOM 170 - Strategic Social Media & Digital Marketing ​3 unit(s)\nADV 94 - Design Fundamentals for Advertising 2 ​3 unit(s)\nNote: ADV 94 is offered in Spring only.\nJMC Elective ​3 unit(s)\nSJSU Studies Area R 3 unit(s)\nApply for the Agency\nApply to Graduate\nYear 4\nFall Semester (15 units)\nMCOM 111 - Internship 3 unit(s) *\nADV 128 - Integrated Marketing Communications (IMC) 3 unit(s)\nNote: ADV 128 will need an Add Code.\nADV 130 - Advertising Portfolio 1 3 unit(s)\nNote: ADV 130 is offered in Fall only.\nJMC Elective 3 unit(s)\nSJSU Studies Area S 3 unit(s)\nSpring Semester (15 units)\nADV 129 - Advertising Campaign Planning and Management 3 unit(s) *\nADV 131 - Advertising Portfolio 2 3 unit(s)\nNote: ADV 131 is offered in Spring only.\nADV 132 - UX UI Design for Advertising 3 unit(s)\nSJSU Studies Area V 3 unit(s)\nUniversity Elective - Lower or Upper Division 3 unit(s)\nRoadmap Notes\n\nAll advertising majors must do a 240 hour internship after completing nine units of advertising classes. Approval is needed to sign up for MCOM 111 - Internship. This may also be done during the summer or winter sessions. MCOM 180 - Independent Study for one unit of credit can be taken any time. Students work directly with faculty in their major. MCOM 180ITL - JMC International Experience is required of all advertising majors entering the JMC School starting in Fall 2015. This requirement can be completed during any academic session of the year. See the JMC School website video tutorial and information on the wide variety of options for an international experience.\n\n* MCOM 199A/MCOM 199B substitutes for MCOM 111 and ADV 129 by invitation.\n\n Return to: 4-Year Roadmaps (2021-2022)\n\n\n\na\nAdd to My Favorites (opens a new window)\nShare this Page\nPrint (opens a new window)\nHelp (opens a new window)\n\n\n\n\n\nSan José State University\n\nSJSU on Facebook\nSJSU on Twitter\nSJSU on LinkedIn\nSJSU on Instagram\nSJSU on YouTube\n\nOne Washington Square\nSan José, CA 95192\n408-924-1000\nSJSU Online\nAccessibility\nAccreditation\nTitle IX\nDiversity\nLand Acknowledgement\nPrivacy\nCOLLEGES\nBusiness\nEducation\nEngineering\nGraduate Studies\nHealth and Human Sciences\nHumanities and the Arts\nProfessional and Global Education\nScience\nSocial Sciences\nRESOURCES\nA-Z Index\nAnnual Security Report [pdf]\nBookstore\nCalendars\nCareers and Jobs\nCatalog\nCurrent Students\nEmergency Food & Housing\nFreedom of Speech\nKing Library\nNewsCenter\nParenting Students\nParking and Maps\nCONTACT US\nContact Form\nDirectory\nDoing Business with SJSU\nEmergency Info\nReport a Web Problem\nReport a Title IX Complaint\nAll catalogs © 2025 San José State University. Powered by Modern Campus Catalog™.",
      "url": "https://catalog.sjsu.edu/preview_program.php?catoid=10&poid=2532&returnto=741",
      "title": "Program: Advertising, Area of Specialization in Creative Track, ..."
    },
    {
      "content": "Skip to Content\nSAN JOSÉ STATE UNIVERSITY\nVISIT\nAPPLY\nGIVE\nMENU\nSEARCH\nAbout\n \n\n\n \t\t \t\n \t\nSelect a Catalog\n2024-2025 Academic Catalog\nMyRoadmaps Catalog\n2023-2024 Academic Catalog [ARCHIVED CATALOG]\n2022-2023 Academic Catalog [ARCHIVED CATALOG]\n2021-2022 Academic Catalog [ARCHIVED CATALOG]\n2020-2021 Academic Catalog [ARCHIVED CATALOG]\n2019-2020 Academic Catalog [ARCHIVED CATALOG]\nMyRoadmaps Catalog\n\n\nCatalog Search\nSelect an option\nCourses\nPrograms\nDepartments and Colleges\nPolicies and Procedures\nEntire Catalog\nEntire Catalog\nS\nearch\n Whole Word/Phrase\nAdvanced Search\n\n\nCatalog Home\n4-Year Roadmaps (2024-2025)\n4-Year Roadmaps Archive\nUndergraduate Advisor Directory\nAssociate Degrees for Transfer (ADT)\nADT Transfer Roadmaps Archive\nADT Transfer Advisor Directory\nSpartan Accelerated Graduate Education (SAGE) Scholars Programs\nSAGE Roadmaps & Advisor Directory\nCalifornia Promise\nCredit by Examination\nGeneral Education Requirements\nUndergraduate University Graduation Requirements\nAdvising Hub\nArticulation\nClass Schedules\nRegistrar’s Office\n\n\nMy Favorites\n\t\na\nAdd to My Favorites (opens a new window)\nShare this Page\nPrint (opens a new window)\nHelp (opens a new window)\nAdvertising, Area of Specialization in Creative Track, BS (2024-2025)\n\n\n\n Return to: 4-Year Roadmaps (2021-2022)\n\nThe following roadmap is a sample advising map to complete the degree program in four years. Please consult your MyPlanner and major advisor as you develop your individualized academic plan. Students must have completed 60+ units in order to enroll in SJSU Studies courses.\n\nYear 1 | Year 2 | Year 3 | Year 4\n\n\n\nYear 1\nFall Semester (15 units)\nADV 91 - Introduction to Advertising 3 unit(s)\nGE Area A2 3 unit(s)\nGE Area B2/B3 3 unit(s)\nGE Area D + US123 3 unit(s)\nUniversity Elective - Lower or Upper Division 3 unit(s)\nSpring Semester (14 units)\nMCOM 70 - Visual Communication for Modern Media 3 unit(s)\nGE Area A1 3 unit(s)\nGE Area B4 3 unit(s)\nGE Area D + US123 3 unit(s)\nPhysical Education 1 unit(s)\nUniversity Elective - Lower or Upper Division 1 unit(s)\nYear 2\nFall Semester (16 units)\nENGL 71 - Creative Writing 3 unit(s) (C2)\nGE Area A3 3 unit(s)\nGE Area B1/B3 3 unit(s)\nGE Area C1 3 unit(s)\nGE Area F 3 unit(s)\nPhysical Education 1 unit(s)\nComplete the Upper Division Writing - Directed Self Placement\nSpring Semester (15 units)\nADV 95 - Working With Type 3 unit(s)\nArt Elective 3 unit(s) *\nGE Area C1 or C2 3 unit(s)\nGE Area E 3 unit(s)\nUniversity Elective - Lower or Upper Division 3 unit(s)\nYear 3\nFall Semester (15 units)\nMCOM 100W - Writing Workshop: Mass Communications 3 unit(s) (WID)\nADV 121 - Strategic Planning/Communications 3 unit(s)\nMCOM 104 - Introduction to Mass Communications Research 3 unit(s)\nADV 93 - Design Fundamentals for Advertising 1 3 unit(s)\nNote: ADV 93 is offered in Fall only.\nUniversity Elective - Lower or Upper Division 3 unit(s)\nSpring Semester (15 units)\nADV 124 - Copywriting 3 unit(s)\nMCOM 170 - Strategic Social Media & Digital Marketing 3 unit(s)\nADV 94 - Design Fundamentals for Advertising 2 3 unit(s)\nNote: ADV 94 is offered in Spring only.\nJMC Elective ​3 unit(s)\nSJSU Studies Area R 3 unit(s)\nApply for the Agency\nApply to Graduate\nYear 4\nFall Semester (15 units)\nMCOM 111 - Internship 3 unit(s) *\nADV 128 - Integrated Marketing Communications (IMC) 3 unit(s)\nNote: ADV 128 will need an Add Code.\nADV 130 - Advertising Portfolio 1  3 unit(s)\nNote: ADV 130 is offered in Fall only.\nJMC Elective 3 unit(s)\nSJSU Studies Area S 3 unit(s)\nSpring Semester (15 units)\nADV 129 - Advertising Campaign Planning and Management 3 unit(s) *\nADV 131 - Advertising Portfolio 2 3 unit(s)\nNote: ADV 131 is offered in Spring only.\nADV 132 - UX UI Design for Advertising 3 unit(s)\nSJSU Studies Area V 3 unit(s)\nUniversity Elective - Lower or Upper Division 3 unit(s)\nRoadmap Notes\n\nAll advertising majors must do a 240 hour internship after completing nine units of advertising classes. Approval is needed to sign up for MCOM 111. This may also be done during the summer or winter sessions. MCOM 180 - Independent Study for one unit of credit can be taken any time. Students work directly with faculty in their major.\n\n* MCOM 199A/MCOM 199B substitutes for MCOM 111 and ADV 129 by invitation.\n\n Return to: 4-Year Roadmaps (2021-2022)\n\n\n\na\nAdd to My Favorites (opens a new window)\nShare this Page\nPrint (opens a new window)\nHelp (opens a new window)\n\n\n\n\n\nSan José State University\n\nSJSU on Facebook\nSJSU on Twitter\nSJSU on LinkedIn\nSJSU on Instagram\nSJSU on YouTube\n\nOne Washington Square\nSan José, CA 95192\n408-924-1000\nSJSU Online\nAccessibility\nAccreditation\nTitle IX\nDiversity\nLand Acknowledgement\nPrivacy\nCOLLEGES\nBusiness\nEducation\nEngineering\nGraduate Studies\nHealth and Human Sciences\nHumanities and the Arts\nProfessional and Global Education\nScience\nSocial Sciences\nRESOURCES\nA-Z Index\nAnnual Security Report [pdf]\nBookstore\nCalendars\nCareers and Jobs\nCatalog\nCurrent Students\nEmergency Food & Housing\nFreedom of Speech\nKing Library\nNewsCenter\nParenting Students\nParking and Maps\nCONTACT US\nContact Form\nDirectory\nDoing Business with SJSU\nEmergency Info\nReport a Web Problem\nReport a Title IX Complaint\nAll catalogs © 2025 San José State University. Powered by Modern Campus Catalog™.",
      "url": "https://catalog.sjsu.edu/preview_program.php?catoid=10&poid=9177&returnto=741",
      "title": "Advertising, Area of Specialization in Creative Track, BS ..."
    }
  ],
  "msg": null,
  "code": 1,
  "error": null,
  "ok": true
}
```

## 并发支持

目前 API 正处于公测期间，不限制并发请求。用户可以放心地进行多并发调用，而无需担心速率限制。

---

## 其他说明

通过合理组合以上参数，开发者可以精准控制搜索行为和结果。建议在正式使用前，先行测试不同参数组合，以确保满足应用的具体需求。

如有疑问或需要更多帮助，请参考我们的[开发者支持页面](https://docs.maxkb.ai/support)或联系技术支持团队。
