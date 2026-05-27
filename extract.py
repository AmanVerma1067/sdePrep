import sys
import json
from bs4 import BeautifulSoup

def parse_html(filepath, r_id, title, accent, icon):
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    phases = []
    # Match both <section class="phase"> and <div class="phase">
    for phase_node in soup.find_all(lambda tag: tag.name in ['section', 'div'] and tag.has_attr('class') and 'phase' in tag['class']):
        phase_header = phase_node.find('div', class_='phase-title')
        phase_title = phase_header.get_text(strip=True) if phase_header else "Phase"
        
        topics = []
        for card in phase_node.find_all('div', class_=lambda c: c and 'topic-card' in c):
            name_el = card.find('div', class_='topic-name')
            why_el = card.find('div', class_='topic-why')
            links_row = card.find('div', class_='links-row')
            
            name = name_el.get_text(strip=True) if name_el else "Unknown Topic"
            desc = why_el.get_text(strip=True) if why_el else ""
            
            links = []
            if links_row:
                for a in links_row.find_all('a'):
                    links.append({
                        "text": a.get_text(strip=True),
                        "url": a.get('href')
                    })
            
            topics.append({
                "name": name,
                "desc": desc,
                "links": links
            })
            
        phases.append({
            "title": phase_title,
            "topics": topics
        })
        
    return {
        "id": r_id,
        "title": title,
        "accent": accent,
        "icon": icon,
        "phases": phases
    }

def main():
    rm1 = parse_html('/home/aman/Downloads/roadmap/cs_core_roadmap.html', 'cs-core', 'CS Core Subjects', '#7c6cf5', '🧠')
    rm2 = parse_html('/home/aman/Downloads/roadmap/js_roadmap.html', 'js-fullstack', 'Full-Stack JavaScript', '#6c63f5', '⚡')
    rm3 = parse_html('/home/aman/Downloads/roadmap/python_ml_roadmap.html', 'python-ml', 'Python AI/ML', '#3db872', '🤖')
    
    out = [rm1, rm2, rm3]
    with open('/home/aman/Downloads/roadmap/sde-prep/src/data.js', 'w', encoding='utf-8') as f:
        f.write("export const roadmaps = " + json.dumps(out, indent=2) + ";\n")

if __name__ == '__main__':
    main()
