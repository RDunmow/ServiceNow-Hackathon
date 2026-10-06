# Team planning template

Copy this into a shared document for your team. Fill it in before you open Build Agent. Use plain language: you'll turn it into prompts in [Guide 3](03-writing-good-prompts.html).

**Team name:**
**Challenge:**
**Team members and roles:**

---

## 1. The problem

- **Who has this problem?**
- **What happens today?** (How is it handled now: email, spreadsheets, phone calls?)
- **What goes wrong, and what does it cost?** (Time lost, delays, errors, frustration.)
- **In one sentence, the problem is:**

## 2. The people

| Persona or role | What they need to do in the app | How often |
|---|---|---|
| | | |
| | | |

## 3. The finished product

- **Headline:** If this app went live tomorrow, what would the announcement say? (One sentence.)
- **Demo story:** Describe your 5-minute demo, step by step, as the person using it.
  1.
  2.
  3.
  4.
- **What has changed for the people in section 2?**

## 4. Scope

| Must have (working by end of day 1) | Should have (day 2) | Won't have (parking lot) |
|---|---|---|
| | | |
| | | |

## 5. Data

For each table, list the fields you need. Where you can, reuse platform tables, such as users (sys_user), groups (sys_user_group), locations (cmn_location) and departments (cmn_department).

**Table:**

| Field | Type (text, number, date/time, true/false, choice, reference) | Choices or referenced table | Mandatory? |
|---|---|---|---|
| | | | |

**Table:**

| Field | Type | Choices or referenced table | Mandatory? |
|---|---|---|---|
| | | | |

**How do the tables relate?** (For example: one piece of equipment has many bookings.)

## 6. The process

- **What starts it?** (A user submits something, a date passes, a field changes.)
- **Steps:**
  1.
  2.
  3.
- **States the record moves through:** (For example: requested → approved → completed.)
- **Approvals:** Who approves, and what happens if they reject?
- **Notifications:** Who needs to know, and when?

## 7. Rules and logic

List the rules the app must enforce. Write each as "When... then..." or "Never allow...".

-
-

## 8. Where people work

For each persona, where will they use the app? (A form and list in the platform, a dashboard, a simple page for requesters.) Sketch the key screens on paper and photograph them.

-
-

## 9. Who can see and do what

| Role | Create | Read | Update | Delete |
|---|---|---|---|---|
| | | | | |

## 10. Test scenarios

List the scenarios you'll test. Include at least one "unhappy path".

| Scenario | Expected result |
|---|---|
| | |
| | |

## 11. How you'll show value

- **What would you measure if this went live?** (Time saved, fewer errors, faster turnaround.)
- **What's your rough estimate, and how did you reach it?**

## 12. Assumptions, risks and open questions

-
-

## 13. Where could AI help?

Look at your process. Where do people spend time reading, sorting, judging or chasing? Those are the best places for AI. See [Guide 5](05-adding-an-agent-or-skill.html).

| Where people spend time today | What AI could do | Skill or agent? | What a person stays in control of |
|---|---|---|---|
| | | | |
| | | | |

---

**Mentor check:** ☐ Problem is clear ☐ Scope is realistic ☐ Data is defined ☐ Demo story is agreed
