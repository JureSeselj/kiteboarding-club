![Logo](wireframes/logo.JPG)

# NRT Kiteboarding Club

# Goal for this Project
Welcome to NRT Kiteboarding Club. This club provides an outlet for all people desiring adrenalin and sport activity to get involved and give kiteboarding a go. 

This site gives some information about the club, basic information about kiteboarding and club events to capture the eye of a potential member. It also gives the ability to make contact with the club easily through social media or directly via the contact form.

![Responsive Displays](wireframes/different-displays.JPG)

# Table of Contents
* [UX](#ux "UX")
    * [User Goals](#user-goals "User Goals")
    * [User Stories](#user-stories "User Stories")
    * [Site Owners Goals](#site-owners-goals)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
         * [Requirements](#requirements)
         * [Expectations](#expectations)
     * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Icons](#icons)
        * [Colours](#colours)
        * [Structure](#structure)
    * [Wireframes](#wireframes)
    * [Features](#features)
        * [Existing Features](#existing-features)
            * [Navigation Bar](#navigation-bar)
            * [Landing Page](#landing-page)
            * [About Section](#about-section)
            * [Events Section](#events-section)
            * [Contact Section](#contact-section)
            * [Footer](#footer)
        * [Features to be implemented](#features-to-be-implemented)
    * [Technologies used](#technologies-used)
        * [Languages](#languages)
        * [Tools and Libraries](#tools-and-libraries)
    * [Testing](#testing)
        * [Unfixed Bugs](#unfixed-bugs)
    * [Deployment](#deployment)
    * [Credits](#credits)

# UX

## User Goals
* Visually appealing, including images.
* Easily navigated around.
* Quality and valuable content.
* Easily found contact details.
* Form to directly contact the club.

## User Stories
* As a user, I want to know that the club is well established.
* As a user, I want the website to give me information about what is involved in kiteboarding and paddle boarding.
* As a user, I want to be able to easily contact the club.
* As a user, I want to be able to make contact with the club via several different methods, i.e. social media.
* As a user, I want to be able to easily navigate through the website.
* As a user, I want to know where the club is based.
* As a user, I want to know what events are taking place.

## Site owners Goals
* Promote the kiteboarding club.
* Increase the number of members.
* Increase rankings on search engines.

### Requirements
* Easy to navigate on various screen sizes.
* Clear information on the services provided.
* Keep the user interested with small bits of information to make them want to engage with the club.
* Simple methods of contacting the club.
* Visually inviting so users do not leave.

### Expectations
* I expect to know if a form has been submitted properly and if items are not filled in, to be prompted.
* I expect all links to social media sites to be opened in a new tab.
* I expect all navigation links to work correctly.
* I expect screen size not to affect the quality of the website.
* I expect all information to be correct and accurate.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Design Choices

### Fonts
In order to move away from the basic fonts available, I have used 
[Google Fonts](https://fonts.google.com/ "Google Fonts") to find a text that best suits the feel of the website. For the main text I have chosen [Lato](https://fonts.google.com/specimen/Lato?query=lato "Lato font") as I feel it is has a sharp, simple and easy to read look. To make the headers and the navigation bar stand out form the text, I decided to use [Oswald](https://fonts.google.com/specimen/Oswald?query=osw "Oswald font"). This font is complimentary to Lato but gives clear definition between text and headers.

### Icons
I will used some icons for my website from the [Font Awesome library](https://fontawesome.com/ "Font Awesome"). These icons will only be used where there is no explination needed to their meaning, social media links, contact links and a hamburger for navigational links on all devices. All icons used will be styled and in keeping with the appearance of the website.

### Colours
I have used [Canva](https://www.canva.com/ "canva") to help in the selection of my colour scheme. I selected the initial colour that I wanted the reast of my pallet to fit with and then used the generator to create the pallet, it can be seen [here](wireframes/colour_pallet.JPG "Generated Colour Pallet").

I will explain the uses of the varius colours below, starting from top to bottom.

![Colour Pallet](wireframes/new-colour-pallet.JPG)

* #232425 - This colour will be used as a background colour for sections
* #383838 - This colour will be used as a background colour for sections titles
* #fafafa - This colour will be used as a text colour also the icons colour
* #01B9CC - This colour will be used as span and logo text colour also for borders and buttons
* #FFFF00 - This colour will be used as bottom border for nav bar and some other titles

### Structure
I will be building my website with a mobile first mindset using the iPhone 5/SE (320px) as the smallest screen size for styling to look good on. The screen size breakpoints that I will be using are :

| Screen Size | Breakpoint |
| ----------- | ---------- |
| x-small     | <576px     |
| small       | => 576px   |
| medium      | => 768px   |
| large       | => 992px   |
| x-large     | => 1200px  |

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Wireframes
I have used [Balsamic](https://balsamiq.com/wireframes/ "Balsamic") to develop my wireframes for my website. I initially created the mobile version and then the wireframes and then scalled it up for both tablet and desktop. Because a requirement is to give little but quality information to the user to make them want to engage with the school, a one-page website is used. This gets the user through the content and quickly to the contact form and details via scrolling or directly via the navigation bar.

The wireframes are below:

### [Desktop Wireframe](wireframes/T4Tri_desktop.png "Desktop wireframe")
### [Tablet Wireframe](wireframes/T4Tri_tablet.png "Tablet wireframe")
### [Phone Wireframe](wireframes/T4Tri_phone.png "Phone wireframe")

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Features

## Existing Features

### Navigation Bar

The navigation bar is position vertical with hamburger icon and fully responsive to allow for various screen sizes. It includes links to manover around the site easily.

+ Desktop (>=992px)
\
&nbsp;
    ![Navigation bar](wireframes/nav-bar-desktop.JPG)
    -   Spanning the full width of the device and with all links (Home, About, Events, Contact) to navigate visible, this gives ease and clear use to the end user.

    -   In order for the user to visably see which of the links they are hovering over there is a bar below the text.

    ![Navigation bar on hover](wireframes/nav-bar-hover.JPG)
    \
    &nbsp;
    -   For the user to know that a link has been clicked there is also a visual aid of the bar changing colour.

    ![Navigation bar on focus](wireframes/nav-bar-focus.JPG)
    \
    &nbsp;

+ Small devices (<992px)
\
&nbsp;
    - As the navigation bar would be unuseable in the desktop version on smaller devices, it takes on a hamburger style.

    \
    &nbsp;
![Nav bar on small devices](wireframes/nav-bar-small.JPG)

    - When pressed, it opens up the main menu with all the links available then.

    \
    &nbsp;
![Nav bar on small devices expanded](wireframes/nav-bar-small-expanded.JPG)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Landing Page

+ The landing page image
    - The image gives the user instant knowledge of what is involved in the school, and with added animation draws their eye to the site.
    - The text gives instant information to the user on what the school is. With the added animation of fading in slightly behind the image, it makes the user keep interest. 
    \
    &nbsp;

    ![Landing Page](wireframes/landing-page.JPG)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Welcome Section

+ The welcome section gives a brief introduction to the user on what NRT Kiteboarding Club is and who is welcome.
    \
    &nbsp;

    ![Welcome Section](wireframes/welcome.JPG)
    \
    &nbsp;

+ To speed up user interation, there is a *'Join Us'* button that directly links to the contact form. This button has a hover effect on it in the form of an animation to allow the user to know that it is something to be pressed.
    \
    &nbsp;

    ![Welcome Button](wireframes/welcome-button.JPG)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### About Section

+ The about section gives a brief, and attemped humerous, description of the kiteboarding school with the adition of a character showing the user what is involved, even if they do not want to read the descriptions. It is also responsive to suit the different screen sizes.
    \
    &nbsp;

    *Desktop*

    ![About Section on Desktop](wireframes/about.JPG)
    \
    &nbsp;


    *Laptop*
    
    ![About Section on Tablet](wireframes/about-laptop.JPG)
    \
    &nbsp;

    
    *Phone and Tablet*
    
    ![About Section on Phone](wireframes/about-phone.JPG)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Events Section

+ This is where the most upcoming school events are shown. It includes an icon to quickly show if it is a social or a race event to the user. Also, on the larger screen sizes it includes some images to break up the screen.
    \
    &nbsp;

    *Large device*

    ![Events Section on Large Display](wireframes/events-large-device.JPG)
    \
    &nbsp;

    *Small device*

    ![Events Section on Small Display](wireframes/events-small-device.JPG)

    \
    &nbsp;
+ The date and location are also shown with the added function of a link to the directions of the event via Google Maps. There is also a label added, and animation for extra information to the user that it is a link to follow.
    \
    &nbsp;

    ![Events Section Directions](wireframes/events-directions.JPG)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Contact Section

+ The contact section allows the user to quickly send a message to the NRT Kiteboarding Club. it also has a map of the location of the club base.
    \
    &nbsp;

    ![Contact Section](wireframes/contact.JPG)
    \
    &nbsp;

+ The text fields are all required fields and will not alow the user to submit until they are completed, this includes a validation on the email to ensure it is in a valid format. There is also a hover effect on the submit button to give the user feedback that it is and active button.
    \
    &nbsp;

    ![Contact Section](wireframes/contact-email.JPG)
    \
    &nbsp;

+ On submission of the form, the user is bought to a page showing that their details were received.
    \
    &nbsp;

    ![Contact Section](wireframes/contact-received.JPG)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Footer

+ The footer contains the social media links related to KTB and the copyright text. These social links all open in a new tab for ease of use to the user and also, so the user has an ability to easily come back to KTB's site.
    \
    &nbsp;

    ![Contact Section](wireframes/footer.JPG)
    \
    &nbsp;

+ There is also a hover effect over the links, again to improve user experiance.
    \
    &nbsp;

    ![Contact Section](wireframes/footer-hover.JPG)
    \
    &nbsp;

## Features to be Implemented

+ Contact form to send message to NRT Kiteboarding Club instead of leading to a dummy page.
+ Links to club sponsors websites.
+ Add a shop for school clothing to be purchased.
+ Add a library of structured workouts for all activities.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Technologies used

## Languages
* [HTML](https://en.wikipedia.org/wiki/HTML "HTML")
* [CSS](https://en.wikipedia.org/wiki/CSS "CSS")

## Libraries & Framework
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
* [Font Awesome library](https://fontawesome.com/ "Font Awesome")

## Tools
* [Gitpod](https://www.gitpod.io/ "Gitpod")
* [Balsamic](https://balsamiq.com/wireframes/ "Balsamic")
* [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML")
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS")
* [Colourmind](https://colormind.io/ "colourmind")
* [Font Awesome library](https://fontawesome.com/ "Font Awesome")
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
* [Unsplash](https://unsplash.com/ "Unsplash")
* [Box Shadow Generator](https://html-css-js.com/css/generator/box-shadow/ "html-css-js.com")

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;





# Credits

For code inspiration, help and advice,
* [Simen Daehlin](https://github.com/Eventyret "Simen Daehlin")
\
&nbsp;

For content and style inspiration,
* [Neretva Kiteboarding](https://neretvakiteboarding.com/ "Neretva Kiteboarding")
* [Pure Magic](https://puremagic.ie/ "Pure Magic")
* [Kitesurfing Dublin](https://kitesurfingdublin.com/ "Kitesurfing Dublin")

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

