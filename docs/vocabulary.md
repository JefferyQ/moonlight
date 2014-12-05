---
layout: page
title:  Vocabulary
---

We are building an admin UI. What is the purpose of the UX elements we 
are building? Let's decompose, starting at the top, the core concepts.

# Activity

A task or resource of interest. It's the thing you are asking this 
theme to get you to, which then fills the content area described below.

# Layout

The *layout* is the top-most container. In a sense, it is the 
background or canvas upon which the UX rests. In theory we could 
support multiple layouts in the same UX. For now, we'll presume there 
is just one.

The layout contains just a few direct children, as described below: 
header, section groups menu, content, and footer.

# Header

A region which holds elements that are site-wide and should be within 
easy reach. Usually associated with "the top" but that is not the 
purpose of the jargon.

The header does not change, other than decoration, from URL to URL.

# Section Groups Menu

This is a listing of section groups, which is the primary purpose of 
this admin theme. The contain the activities that a developer wants to 
make reachable when administering an application.

The section groups menu does not change, other than decoration, from URL
to URL.

# Content

The main part of the screen that shows the current activity.

# Footer

A place to put links traditionally associated with a website footer.

# Further Vocabulary

If all we agree on is the above, then that is progress. For the sake of
bootstrapping, let's pick some non-controversial children in each of 
those elements.

## Header

- *Branding*. An area with a logo, title, and clickable element
 which goes to the root.

- *Quick Links*. A way to register a menu of very common 
activities that the user shouldn't have to drill down through the 
section system to reach.

- *Search*. A site-wide search box.

- *User*. A place to login, show logged in user, log out, get 
to the profile, etc. Perhaps with a submenu of activities related to 
the person.

## Section Groups Menu

The section groups menu supports a three-level-deep UX.

- *Section Group*. A collection of sections of the site into a menu 
with a heading.

- *Section*. A particular activity in the admin UI, or collection of 
subsections.

- *Subsection*. An activity that is part of a section.

## Content

We have to be careful about constraints in the content area. People are
going to want a big canvas without restrictions.
 
Except, of course, when they *do* want restrictions, meaning, to take 
advantage of a well-thought-out layout. Thus, we can provide some 
opt-in UX inside the content area.

- *Subheader*. A consistent area about the activity that 
you navigated to. Can contain a nicely-laid-out title, date, author, 
side menu of operations, breadcrumbs, etc.

- *Listbrowser*. One theme we use has a "Mail" section that fills the 
content area with a 3-panel UI. The left part of that 3-panel-UI is a 
browser of the mail boxes. More generally, if the content area is 
pointed at something which has a series of top-level collections, you 
can make that a first-class part of the UX.

- *Sidepanel*. A property inspector, submenu, or even tabbed-menu for the
current activity.
