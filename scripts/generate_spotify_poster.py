"""Rebuild the A1 poster from the supplied IS630 report's published numbers.

No raw-data analysis is performed. Values come from AQ2 Tables 1-2 (p. 5),
AQ2 interpretation (p. 6), and AQ3 instrumentalness results (p. 9).
"""
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph, Table, TableStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output/pdf/spotify-audio-popularity-poster.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)
pdfmetrics.registerFont(TTFont("Arial", "C:/Windows/Fonts/arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", "C:/Windows/Fonts/arialbd.ttf"))
W, H = 1684, 2384
INK = colors.HexColor("#0b151c")
TEAL = colors.HexColor("#2e7588")
MUTED = colors.HexColor("#556268")
LIGHT = colors.HexColor("#eaf1f3")
GRID = colors.HexColor("#d1dadd")
c = canvas.Canvas(str(OUT), pagesize=(W, H))
c.setTitle("Inferring Song Popularity on Spotify Using Audio Characteristics")
c.setAuthor("Quyen Nguyen and IS630 project team")
BODY = ParagraphStyle("body", fontName="Arial", fontSize=22, leading=30, textColor=INK, spaceAfter=14)
SMALL = ParagraphStyle("small", parent=BODY, fontSize=18, leading=25, textColor=MUTED)
BOLD = ParagraphStyle("bold", parent=BODY, fontName="Arial-Bold", textColor=TEAL)

def para(text, x, top, width, style=BODY):
    p = Paragraph(text, style)
    _, h = p.wrap(width, H)
    p.drawOn(c, x, H-top-h)
    return top+h+18

def heading(text, x, top, width):
    p = Paragraph(text, ParagraphStyle("h", fontName="Arial-Bold", fontSize=32, leading=38, textColor=TEAL))
    _, h = p.wrap(width, H)
    p.drawOn(c, x, H-top-h)
    c.setStrokeColor(INK)
    c.setLineWidth(1.4)
    c.line(x, H-top-h-12, x+width, H-top-h-12)
    return top+h+32

def table(rows, widths, x, top):
    cell = ParagraphStyle("cell", parent=BODY, fontSize=20, leading=26)
    head = ParagraphStyle("th", parent=cell, fontName="Arial-Bold", textColor=colors.white)
    data = [[Paragraph(str(v), head if i==0 else cell) for v in row] for i,row in enumerate(rows)]
    t = Table(data, colWidths=widths, hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,0),INK),
        ("BACKGROUND",(0,1),(-1,-1),colors.white),
        ("GRID",(0,0),(-1,-1),0.7,GRID),
        ("VALIGN",(0,0),(-1,-1),"MIDDLE"),
        ("LEFTPADDING",(0,0),(-1,-1),11),
        ("RIGHTPADDING",(0,0),(-1,-1),11),
        ("TOPPADDING",(0,0),(-1,-1),14),
        ("BOTTOMPADDING",(0,0),(-1,-1),14),
        ("BACKGROUND",(0,-1),(-1,-1),LIGHT),
    ]))
    _, h = t.wrap(W,H)
    t.drawOn(c,x,H-top-h)
    return top+h+22

def note(text, x, top, width):
    p = Paragraph(text, BOLD)
    _, h = p.wrap(width-36,H)
    c.setFillColor(LIGHT)
    c.rect(x,H-top-h-36,width,h+36,fill=1,stroke=0)
    c.setFillColor(INK)
    c.rect(x,H-top-h-36,7,h+36,fill=1,stroke=0)
    p.drawOn(c,x+20,H-top-h-18)
    return top+h+58

def forest(x, top, width):
    rows = [("Danceability", "+0.1", .36,.34,.39), ("Energy", "+0.1",-.63,-.66,-.60),
            ("Loudness", "+1 dB",.23,.22,.24), ("Acousticness", "+0.1",-.43,-.45,-.42),
            ("Instrumentalness", "+0.1",-.57,-.58,-.55)]
    left=x+176; plotw=width-202
    xx=lambda v:left+(v+.8)/1.4*plotw
    for v in [-.8,-.4,0,.4,.6]:
        c.setStrokeColor(GRID if v else MUTED); c.setLineWidth(1)
        c.line(xx(v),H-top-10,xx(v),H-top-330)
        c.setFont("Arial",17); c.setFillColor(MUTED)
        c.drawCentredString(xx(v),H-top-358,f"{v:g}")
    for i,(name,step,val,low,high) in enumerate(rows):
        y=H-top-48-i*57
        c.setFillColor(INK); c.setFont("Arial-Bold",19); c.drawString(x,y,name)
        c.setFont("Arial",17); c.setFillColor(MUTED); c.drawString(x,y-24,step)
        c.setStrokeColor(TEAL); c.setLineWidth(4); c.line(xx(low),y,xx(high),y)
        c.line(xx(low),y-7,xx(low),y+7); c.line(xx(high),y-7,xx(high),y+7)
        c.setFillColor(TEAL); c.circle(xx(val),y,6,fill=1,stroke=0)
        c.setFont("Arial-Bold",20); c.drawCentredString(xx(val),y+18,f"{val:+.2f}")
    return top+387

def cohort_bars(x, top, width):
    # Directly reported posterior proportions, not a reconstruction of raw data.
    rows=[("2000s",4.94,5.70),("2010s",3.85,9.85),("2020-2021*",.68,13.72)]
    c.setFont("Arial-Bold",19); c.setFillColor(TEAL); c.drawString(x,H-top,"Hits")
    c.setFillColor(MUTED); c.drawString(x+105,H-top,"Non-hits")
    for i,(era,hit,non) in enumerate(rows):
        yy=top+49+i*120
        c.setFont("Arial-Bold",22); c.setFillColor(INK); c.drawString(x,H-yy,era)
        for j,(v,color) in enumerate([(hit,TEAL),(non,MUTED)]):
            c.setFillColor(color); c.rect(x,H-yy-31-j*33,v/15*(width-82),23,fill=1,stroke=0)
            c.setFont("Arial",19); c.drawString(x+v/15*(width-82)+10,H-yy-27-j*33,f"{v:.2f}%")
    return top+407

c.setFillColor(colors.white); c.rect(0,0,W,H,fill=1,stroke=0)
c.setFillColor(MUTED); c.setFont("Arial",25); c.drawCentredString(W/2,H-64,"IS630  |  Group research project  |  Singapore Management University")
c.setFillColor(INK); c.setFont("Arial-Bold",72)
c.drawCentredString(W/2,H-158,"Inferring Song Popularity on Spotify")
c.drawCentredString(W/2,H-244,"Using Audio Characteristics")
c.setFillColor(TEAL); c.setFont("Arial-Bold",29)
c.drawCentredString(W/2,H-307,"Audio adds context. It does not establish catalog value.")
c.setFont("Arial",22); c.setFillColor(MUTED)
c.drawCentredString(W/2,H-350,"Quyen Nguyen and project team  |  Portfolio poster adapted from the supplied group report")
c.setFillColor(INK); c.rect(0,H-392,W,10,fill=1,stroke=0)
c.setFillColor(TEAL); c.rect(0,H-409,W,8,fill=1,stroke=0)

x1,w1=58,436; x2,w2=530,624; x3,w3=1190,436
for xx in [512,1172]:
    c.setStrokeColor(GRID); c.setLineWidth(.8); c.line(xx,H-450,xx,155)

y=heading("1  Decision context",x1,453,w1)
y=para("A catalog acquisition team needs to assess a body of music, not just identify a catchy song. We examined whether audio characteristics offer useful context beyond release era and other track attributes.",x1,y,w1)
y=heading("2  Data and definitions",x1,y+35,w1)
y=para("Source: the Kaggle Spotify dataset by Yamac Eren Ay (2021), covering 600k+ tracks. The report analyses historical release cohorts using a snapshot of popularity.",x1,y,w1)
y=note("563,511 songs in the AQ2 regression analysis",x1,y+6,w1)
y=para("<b>AQ1:</b> Hit = popularity score at least 53 (global top 10%).<br/><br/><b>AQ3:</b> Hit = top 10% within each release decade. This reduces the distortion from applying one cutoff across eras.",x1,y,w1)
y=heading("3  Three analytical lenses",x1,y+35,w1)
for title,body in [
    ("Compare groups", "Hypothesis tests and chi-square tests examine differences between Hits and Non-hits."),
    ("Estimate associations", "OLS compares controls-only and controls-plus-audio models, with HC3 robust standard errors and sensitivity checks."),
    ("Compare release cohorts", "Bayesian estimation compares audio profiles within decades. Artist resampling checks sensitivity to clustered tracks."),
]:
    y=para(f"<b>{title}.</b> {body}",x1,y,w1)
y=heading("Reading the evidence",x1,y+28,w1)
y=para("The final regression controls are release decade, explicit content, and log duration. Artist fame is <b>not</b> controlled for; it was unavailable for the final analysis.",x1,y,w1)
bottom1=y

y=heading("4  What do audio features add?",x2,453,w2)
y=para("Audio features improve the in-sample fit only modestly. Release-era controls already account for much of the model's explanatory power.",x2,y,w2)
y=table([
    ["Model", "R-squared", "RMSE"],
    ["Decade only", "0.3434", "Not reported"],
    ["Controls only", "0.3566", "14.81"],
    ["Controls + audio", "0.3716", "14.64"],
],[330,145,149],x2,y+7)
y=note("+1.5 percentage points of R-squared after adding five audio features",x2,y+8,w2)
y=para("This compares fitted models; it is not a formal partition of variance and not an out-of-sample prediction result. Source: AQ2, Table 1.",x2,y,w2,SMALL)
y=heading("5  Significant can still be small",x2,y+33,w2)
y=para("Change in popularity points for the stated increase, holding the other variables fixed. Points: estimates; lines: 95% HC3 confidence intervals.",x2,y,w2)
y=forest(x2,y+10,w2)
y=para("All five p-values are below 0.001, yet each displayed step is associated with less than one point on the 0-100 popularity scale. Source: AQ2, Table 2 (rounded reported effects).",x2,y,w2,SMALL)
y=heading("6  Stress-test the interpretation",x2,y+32,w2)
y=para("<b>Bounded outcome:</b> 1.93% of fitted values fall below zero; the maximum fitted value is 55.4. Read the model as associations, not a hit predictor.<br/><br/><b>Overlapping features:</b> energy, loudness, and acousticness should be interpreted together. Duration checks preserved coefficient signs.<br/><br/><b>Changing eras:</b> some associations change sign across release cohorts. A single rule for all catalog ages would miss that context.",x2,y,w2)
bottom2=y

y=heading("7  The era matters",x3,453,w3)
y=para("AQ3 estimates the share of instrumental-classified tracks among Hits and Non-hits within each release decade. Classification: instrumentalness > 0.5.",x3,y,w3)
y=cohort_bars(x3,y+20,w3)
y=para("*2020-2021 is a partial cohort. Bars show reported posterior point estimates. These are composition shares, not the chance of becoming a Hit. Source: AQ3, p. 9.",x3,y,w3,SMALL)
y=note("2010s gap: -6.00 percentage points\n(95% HDI: -6.38 to -5.58)",x3,y+5,w3)
y=para("Artist resampling widens uncertainty and weakens some decade-level findings. The different cohorts do not track the same songs over time or establish changes in listener preferences.",x3,y,w3)
y=heading("8  Decision implications",x3,y+28,w3)
for text in [
    "<b>Benchmark within release eras.</b> Compare catalogs with peers from the same period before interpreting their audio profiles.",
    "<b>Check composition.</b> Examine genre, artist concentration, and audience demand before shortlisting.",
    "<b>Keep commercial due diligence.</b> Revenue history, rights, and acquisition costs remain essential; audio alone does not establish future returns.",
]:
    y=para(text,x3,y,w3)
y=heading("Limits",x3,y+22,w3)
y=para("Snapshot popularity is not success at release. Early decades are sparse and affected by digitisation and survivorship. Unobserved confounding remains. Findings are associations, not causal effects.",x3,y,w3,SMALL)
bottom3=y

assert max(bottom1,bottom2,bottom3) < H-155, (bottom1,bottom2,bottom3)
c.setStrokeColor(TEAL); c.setLineWidth(2); c.line(58,132,W-58,132)
para("<b>Source:</b> IS630 group report, <i>Inferring Song Popularity on Spotify Using Audio Characteristics</i>, pp. 4-10. Figures redrawn from reported values; no new model fitting. Group findings are credited collectively; Quyen's contribution is AQ2 regression analysis.",58,H-111,W-116,SMALL)
c.save()
print(f"Saved {OUT}; content bottoms: {bottom1:.0f}, {bottom2:.0f}, {bottom3:.0f} / {H}")
