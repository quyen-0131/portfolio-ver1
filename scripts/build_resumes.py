"""Create concise and detailed resumes from the user-supplied CVs and portfolio.

Render the DOCX files in Word before exporting the final PDFs. No experience,
qualifications, metrics, or dates are inferred from the targeted job title.
"""
from pathlib import Path
from shutil import copyfile
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK, WD_TAB_ALIGNMENT

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output/resumes"
OUT.mkdir(parents=True, exist_ok=True)
HEADLINE = "Market research professional building toward product strategy and analytics"
SUMMARY = (
    "Market research consultant and SMU Master of IT in Business candidate combining customer insight, "
    "quantitative analysis and independent product prototypes. Experience translating research and "
    "operational evidence into practical recommendations."
)

def font(run, size=None, bold=None):
    run.font.name = "Arial"
    run.font.color.rgb = RGBColor(0, 0, 0)
    if size is not None:
        run.font.size = Pt(size)
    if bold is not None:
        run.bold = bold
    run._element.get_or_add_rPr().rFonts.set(qn("w:ascii"), "Arial")
    run._element.rPr.rFonts.set(qn("w:hAnsi"), "Arial")

def line(doc, text, bold=False, size=None, after=3, keep=False):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(after)
    p.paragraph_format.keep_with_next = keep
    font(p.add_run(text), size, bold)
    return p

def hyperlink(p, text, url):
    rel = p.part.relate_to(url, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", is_external=True)
    h = OxmlElement("w:hyperlink")
    h.set(qn("r:id"), rel)
    r = OxmlElement("w:r")
    pr = OxmlElement("w:rPr")
    f = OxmlElement("w:rFonts"); f.set(qn("w:ascii"), "Arial"); f.set(qn("w:hAnsi"), "Arial"); pr.append(f)
    color = OxmlElement("w:color"); color.set(qn("w:val"), "000000"); pr.append(color)
    r.append(pr)
    t = OxmlElement("w:t"); t.text = text; r.append(t)
    h.append(r); p._p.append(h)

def section(doc, title):
    p = doc.add_paragraph(title, "Heading 1")
    return p

def role(doc, company, title, dates, place, bullets, short=False):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(4 if short else 6)
    p.paragraph_format.space_after = Pt(1)
    p.paragraph_format.keep_with_next = True
    font(p.add_run(company), bold=True)
    font(p.add_run("  |  " + title))
    p = line(doc, place + "\t" + dates, size=9.5 if short else 10, after=2, keep=True)
    p.paragraph_format.tab_stops.add_tab_stop(Inches(7.18 if short else 6.97), WD_TAB_ALIGNMENT.RIGHT)
    for i,text in enumerate(bullets):
        p = doc.add_paragraph(style="List Bullet")
        p.paragraph_format.space_after = Pt(2 if short else 3)
        p.paragraph_format.keep_together = True
        p.paragraph_format.keep_with_next = i < len(bullets)-1
        font(p.add_run(text))

def project(doc, title, text, after=3):
    p=doc.add_paragraph()
    p.paragraph_format.space_after=Pt(after)
    p.paragraph_format.keep_together=True
    font(p.add_run(title + ". "), bold=True)
    font(p.add_run(text))

def base(short):
    doc=Document()
    s=doc.sections[0]
    s.page_width=Inches(8.27); s.page_height=Inches(11.69)
    s.top_margin=s.bottom_margin=Inches(.48 if short else .59)
    s.left_margin=s.right_margin=Inches(.54 if short else .65)
    s.header_distance=s.footer_distance=Inches(.22)
    normal=doc.styles["Normal"]
    normal.font.name="Arial"; normal.font.size=Pt(10 if short else 10.5)
    normal.font.color.rgb=RGBColor(0,0,0)
    normal.paragraph_format.line_spacing=1.04 if short else 1.1
    normal.paragraph_format.space_after=Pt(3)
    for name in ["Title","Heading 1","Heading 2"]:
        st=doc.styles[name]; st.font.name="Arial"; st.font.color.rgb=RGBColor(0,0,0)
        st.font.bold=True
        st.paragraph_format.keep_with_next=True
    for border in list(doc.styles.element.xpath("//w:pBdr")):
        border.getparent().remove(border)
    doc.styles["Title"].font.size=Pt(23 if short else 25)
    doc.styles["Title"].paragraph_format.space_after=Pt(3)
    st=doc.styles["Heading 1"]; st.font.size=Pt(10.5 if short else 11.5)
    st.paragraph_format.space_before=Pt(7 if short else 10)
    st.paragraph_format.space_after=Pt(3 if short else 5)
    # Compact, real Word bullets remain selectable and editable.
    bullet=doc.styles["List Bullet"]
    bullet.font.name="Arial"; bullet.font.size=normal.font.size
    bullet.paragraph_format.left_indent=Inches(.13)
    bullet.paragraph_format.first_line_indent=Inches(-.13)
    bullet.paragraph_format.line_spacing=normal.paragraph_format.line_spacing
    doc.core_properties.title="Quyen Nguyen Resume" if short else "Quyen Nguyen Detailed Curriculum Vitae"
    doc.core_properties.author="Quyen Nguyen"
    doc.core_properties.subject="Research strategy product and analytics"
    doc.add_paragraph("Quyen Nguyen", "Title")
    line(doc,HEADLINE,size=10 if short else 11,after=4,keep=True)
    p=doc.add_paragraph(); p.paragraph_format.space_after=Pt(5 if short else 7)
    hyperlink(p,"ptq.nguyen.2026@mitb.smu.edu.sg","mailto:ptq.nguyen.2026@mitb.smu.edu.sg")
    font(p.add_run("  |  +65 8933 5129  |  "),size=9.3 if short else 10)
    hyperlink(p,"linkedin.com/in/qn131/","https://www.linkedin.com/in/qn131/")
    # Apply contact sizing to hyperlink runs as well.
    for r in p._p.iter(qn("w:r")):
        pr=r.find(qn("w:rPr"))
        if pr is None: pr=OxmlElement("w:rPr"); r.insert(0,pr)
        z=OxmlElement("w:sz"); z.set(qn("w:val"),str(19 if short else 20)); pr.append(z)
    line(doc,SUMMARY,size=10 if short else 10.5,after=3)
    return doc

def education(doc,short):
    section(doc,"Education")
    line(doc,"Singapore Management University  |  Master of IT in Business",bold=True,after=1,keep=True)
    line(doc,"Data Science and Analytics Track  |  Aug 2026 - Dec 2027 expected",after=1,keep=True)
    if not short:
        line(doc,"Coursework: Statistical Thinking, Computational Thinking, Query Processing and Optimisation, Data Analytics Lab.",after=1,keep=True)
    line(doc,"Vingroup Young Talent Scholarship, full ride.",after=4)
    line(doc,"University of British Columbia  |  BA Economics with Distinction",bold=True,after=1,keep=True)
    line(doc,"Minor in Commerce  |  Aug 2018 - May 2023",after=1,keep=True)
    if short:
        line(doc,"Karen McKellin International Leader of Tomorrow Award, full ride; Trek Excellence Scholarship, top 5% for three years.",after=3)
    else:
        line(doc,"CGPA 86.4/100 (4.0/4.33). Karen McKellin International Leader of Tomorrow Award, full ride; Trek Excellence Scholarship, top 5% for three years; Faculty of Arts International Student Scholarship; Recognised Leader of the Class of 2023.",after=3)

def experience(doc,short):
    section(doc,"Experience")
    role(doc,"Decision Lab","Consultant","Sep 2025 - Jul 2026","Ho Chi Minh City, Vietnam",[
        "Led $94K in education research projects, translating user and market evidence into positioning, go-to-market and programme recommendations.",
        "Designed qualitative and quantitative studies across five projects and coordinated data collection and quality checks with international partners, vendors and YouGov.",
    ] if short else [
        "Led education research projects totalling $94K, managing stakeholder coordination, analysis and delivery of strategic reports.",
        "Designed qualitative and quantitative research instruments to investigate decision-making, preferences and contextual barriers across five projects.",
        "Coordinated data collection and quality checks with international partners, external vendors and YouGov; translated findings into positioning, go-to-market and intervention recommendations.",
    ],short)
    role(doc,"AEPD","Program Consultant","Sep 2024 - Aug 2026","Dong Hoi, Vietnam",[
        "Conducted behavioural research with 30 people with disabilities to inform disaster-risk communication and livelihood support.",
        "Scoped education, economic empowerment and climate-resilience interventions; secured US$4K+ across five proposals.",
    ] if short else [
        "Investigated unmet needs and developed five proposals for education, economic empowerment and climate resilience; secured over US$4,000 in funding.",
        "Designed and piloted behavioural research with 30 people with disabilities, examining decision-making biases in disaster-prone communities to inform communication and livelihood-support strategy.",
        "Developed success stories and articles to communicate programme outcomes and support stakeholder engagement.",
    ],short)
    role(doc,"University Canada West","Academic Integrity Operation Assistant","Sep 2023 - Sep 2024","Vancouver, Canada",[
        "Redesigned audit and reporting workflows for 2,000+ cases, improving processing efficiency by 30% and tripling reporting throughput.",
    ] if short else [
        "Improved academic integrity procedures for 2,000+ cases, increasing processing efficiency by 30%.",
        "Produced 1,000+ misconduct summaries in two months through workflow improvements that tripled reporting efficiency per meeting.",
        "Handled 100+ student emails weekly, reducing the team's average response time by 40%; updated 15+ templates and synthesised 50+ reports into practical resource tools.",
    ],short)
    role(doc,"University of British Columbia","Senior Collegia Advisor","Aug 2022 - Apr 2023","Vancouver, Canada",[
        "Led seven advisors delivering 28 programmes for 280 students; increased participation by 93% and reduced delivery time by 50% through operating guidelines.",
    ] if short else [
        "Led seven advisors delivering 28 social and academic programmes for 280 commuting students; increased participation by 93% through tailored outreach and activities.",
        "Monitored budgets and schedules and introduced two operating guidelines that reduced delivery time by 50%; facilitated 28 coaching sessions and 10 peer-led workshops.",
    ],short)
    if not short:
        doc.add_page_break()
        section(doc,"Experience continued")
    role(doc,"Trulioo","Learning and Development Co-op","Jan 2022 - Jul 2022","Vancouver, Canada",[
        "Built a 240-module learning hub for 190 employees; used performance analysis and 21 feedback surveys to increase course completion by 181% and software adoption by 75%.",
    ] if short else [
        "Designed a 240-module learning hub for 190 employees, prioritising content using performance data from 169 employees and 21 feedback surveys.",
        "Increased course completion by 181% and software adoption by 75% through an evidence-informed learning strategy and centralised content.",
    ],short)

# The user's edited Word document is authoritative for the one-page version.
# Preserve its exact content, headline, tables, styles, icons and relationships.
copyfile(ROOT/"content/resumes/one-page-reference.docx", OUT/"Quyen-Nguyen-Resume-1page.docx")

long=base(False)
education(long,False)
experience(long,False)
section(long,"Selected projects")
project(long,"The Career Experiment","Independent prototype in iteration. Framed and built a career-exploration experience connecting students' past activities to small role-shaped experiments. Gathered formative feedback and refined prompts and role previews.",after=6)
project(long,"French Conversations","Independent prototype in iteration. Defined the product, wrote conversations and built reading, sentence-reconstruction and personal-reply practice. Refined the format using early feedback; learner validation remains limited.",after=6)
project(long,"Style DNA","Independent prototype inspired by COMMON GROUND and built after the Culture x Tech makeathon. Connected wardrobe reflection with curated garment research; shifted from a timelessness verdict to the purpose a piece serves. User validation is pending.",after=6)
project(long,"Fleet Maintenance Predictive Analytics","SMU ISSS602 group project, November 2026. Co-authored a KNIME comparison of 10 classifiers using 56,697 training and 24,299 test records. The team's XGBoost model achieved test AUC 0.871 and F1 0.795; compared inspection thresholds and their trade-offs.",after=6)
project(long,"Spotify Popularity Analysis","SMU IS630 group project, 2026. Contributed regression modelling, diagnostics and sensitivity checks. Audio features added 1.5 percentage points of in-sample R-squared beyond release-decade, explicit-content and duration controls. Interpreted the findings as associations rather than causal effects.",after=6)
project(long,"Economics thesis","University of British Columbia, 2023. Used STATA to analyse 400 variables across 7,090 observations and examined associations between Canadian households' socioeconomic circumstances and entertainment choices.",after=5)
section(long,"Earlier experience")
role(long,"University of British Columbia","Learning Rover","Jun 2020 - Sep 2020","Vancouver, Canada",[
    "Delivered 21 technology workshops for 150+ users; created 15+ courses, 200+ blog posts and 30+ training videos using Canvas, WordPress and video-editing tools.",
])
section(long,"Additional consulting and leadership")
project(long,"Propel Impact","Pro-bono Impact Consulting Programme, Sep 2020 - Apr 2021. Consulted for two social enterprises on marketing and product-launch strategy.")
project(long,"EPFL Tech4Impact Challenge","Jun - Sep 2021. Developed a proposal and prototype for a digital platform encouraging socially beneficial actions.")
project(long,"McKinsey Next Generation Women Leaders","Jul 2021. Participated in structured problem-solving and business-skills workshops.")
section(long,"Skills and languages")
line(long,"Analysis: SQL, Python, R, STATA, KNIME, jamovi. Research: study design, qualitative and quantitative analysis, behavioural insight and strategic reporting.",after=3)
line(long,"Delivery and content: Jira, Confluence, Asana, Thinkific, Canvas, Microsoft Office, WordPress and Camtasia.",after=3)
line(long,"Languages: Vietnamese native, English professional, French basic.",after=0)
# Page number is a field, not manually typed pagination.
p=long.sections[0].footer.paragraphs[0]; p.alignment=WD_ALIGN_PARAGRAPH.RIGHT
font(p.add_run("Quyen Nguyen  |  "),9)
f=OxmlElement("w:fldSimple"); f.set(qn("w:instr"),"PAGE"); p._p.append(f)
long.save(OUT/"Quyen-Nguyen-CV-2pages.docx")
print("Created editable resume variants in",OUT)
