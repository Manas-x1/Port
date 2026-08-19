## 1. Google Search Identity — Highest Priority

- [x] Add `WebSite` JSON-LD structured data with `name: "Manas Upadhyay"`.
- [x] Add `alternateName` values such as `Manas Upadhyay Portfolio`.
- [x] Set the canonical URL to `https://manasxz.qzz.io/`.
- [x] Change the homepage `<title>` to:
  `Manas Upadhyay | AI Content Creator, 3D Artist & Visual Designer`
- [x] Add `og:site_name` with the value `Manas Upadhyay`.
- [x] Make sure the visible homepage clearly identifies the owner as `Manas Upadhyay`.
- [x] Remove any unnecessary references to `DigitalPlat Domain` from the site's own metadata/content.
- [x] Check that no existing structured data identifies DigitalPlat as the website name.
- [x] Add the site to Google Search Console.
- [x] Verify `https://manasxz.qzz.io/`.
- [x] Submit the sitemap.
- [x] Use URL Inspection and request re-indexing after the changes.
- [x] Recheck Google Search after Google has recrawled the site.

## 2. Homepage SEO

- [x] Use exactly one primary `<h1>`.
- [x] Make the H1 something close to:
  `Manas Upadhyay`
- [x] Put the professional identity immediately underneath:
  `AI Content Creator · 3D Artist · Visual Designer · Video Editor`
- [x] Add a concise, human-readable introduction containing the name and areas of work.
- [x] Add a proper meta description.
- [x] Keep important information as actual HTML text rather than text embedded inside graphics.
- [x] Use descriptive `<h2>` headings for major sections.
- [x] Make project names actual HTML headings/text.
- [x] Add descriptive text to projects instead of relying only on thumbnails.
- [x] Make navigation links normal crawlable `<a>` links.

## 3. Technical SEO

- [x] Create `/robots.txt`.
- [x] Allow search-engine crawling of public pages.
- [x] Create `/sitemap.xml`.
- [x] Include all important public pages in the sitemap.
- [x] Set the canonical URL on every indexable page.
- [x] Check for accidental `noindex` tags.
- [x] Check for accidental `Disallow: /` in `robots.txt`.
- [x] Make sure HTTP redirects to HTTPS.
- [x] Make sure there isn't a redirect chain.
- [x] Make sure the canonical URL uses HTTPS.
- [x] Make sure the site returns a proper `200 OK` response.
- [x] Check that Google's crawler can access CSS and JavaScript resources.

## 4. Structured Data

- [x] Add `WebSite` structured data.
- [x] Add `Person` structured data for Manas Upadhyay.
- [x] Include the website URL in the `Person` schema.
- [x] Include professional job/title information.
- [x] Add legitimate professional profiles using `sameAs` where applicable.
- [x] Validate the structured data with Google's Rich Results Test.
- [x] Make sure structured data matches visible content on the page.

## 5. Open Graph / Social Sharing

- [x] Add `og:type`.
- [x] Add `og:url`.
- [x] Add `og:title`.
- [x] Add `og:description`.
- [x] Add `og:site_name`.
- [x] Add an appropriate social preview image.
- [x] Add Twitter/X card metadata if X is used.
- [x] Test the sharing preview on major platforms.

## 6. Portfolio Architecture

- [x] Create a dedicated `/work/` page.
- [x] Give major projects individual URLs.
- [x] Create individual project pages for major work.
- [x] Include Kaliya Daman as a featured project.
- [x] Include Shiv Mahapuran / Shiv Puran as a featured project.
- [x] Add the other major AI filmmaking, visual-design, 3D and video projects.
- [x] Organize projects around actual work rather than only generic skill categories.
- [x] Give every important project a unique `<title>`.
- [x] Give every project a unique meta description.
- [x] Add a proper H1 to every project page.
- [x] Explain what was created, what tools were used, and what each project demonstrates.
- [x] Link related projects together.
- [x] Add a clear route back to `/work/` and the homepage.

## 7. About Section — Personal Story

Structure the About section around the user's actual journey rather than making it a generic biography.

### When I Started & Why

- [x] Explain when the creative journey began.
- [x] Explain what initially attracted Manas to graphics, animation and visual creation.
- [x] Explain why visual storytelling became an important direction.
- [x] Establish the transition from learning/experimenting into professional creative work.

### The Past

- [x] Cover the graphics/animation background.
- [x] Cover the progression into 3D, visual design and digital production.
- [x] Include relevant experience from the LinkedIn profile.
- [x] Include the TechXR experience where relevant.
- [x] Explain the progression toward AI content creation and video production.
- [x] Show how different creative disciplines became part of the same journey.

### The Present

- [x] Establish the current identity as:
  `AI Content Creator | Video Editor`
- [x] Explain the current focus on AI filmmaking and cinematic visual storytelling.
- [x] Include generative AI, video production, editing, 3D and visual design.
- [x] Explain how AI is being used as part of a broader creative workflow rather than as a standalone tool.
- [x] Connect the current work directly to the projects showcased in the portfolio.

### The Potential Future

- [x] Explain the direction Manas wants to explore without locking the biography into a single career path.
- [x] Highlight the intersection of AI, filmmaking, 3D, visual effects, interactive media and storytelling.
- [x] Present the future as an evolving creative-technology journey.
- [x] Avoid making unsupported claims about future positions, companies or achievements.

## 8. Homepage UX / Design

- [x] Make the first screen immediately communicate who Manas Upadhyay is.
- [x] Make "Manas Upadhyay" visually prominent.
- [x] Clearly state what he does.
- [x] Put the strongest work immediately after the hero.
- [x] Reduce unnecessary decorative content.
- [x] Make the primary CTA obvious.
- [x] Add an `Explore Work` / `View Projects` CTA.
- [x] Add an `About Me` CTA.
- [x] Add a clear contact CTA.
- [x] Make navigation simple.
- [x] Ensure the mobile layout is excellent.
- [x] Ensure text remains readable without animations.
- [x] Ensure the site remains usable when JavaScript fails or loads slowly.

## 9. Interaction & Scrolling Behavior

### Disable Zooming

- [x] Disable website-level zoom in/out interactions.
- [x] Prevent accidental pinch-to-zoom on supported mobile layouts where appropriate.
- [x] Prevent custom zoom gestures from interfering with the portfolio experience.
- [x] Ensure the site's layout remains fixed and visually consistent rather than scaling unexpectedly through custom interactions.
- [x] Do not break accessibility-related browser behavior unnecessarily; the implementation should target the site's custom zoom/gesture behavior rather than relying on destructive browser restrictions.

### Loading Screen

While the initial loading screen is active:

- [x] Completely disable page scrolling.
- [x] Prevent mouse-wheel scrolling.
- [x] Prevent touch scrolling.
- [x] Prevent trackpad scrolling.
- [x] Prevent keyboard scrolling where applicable.
- [x] Keep the loading screen fixed to the viewport.
- [x] The user should not be able to move the underlying homepage while loading.
- [x] Keep the page position locked until loading is complete.
- [x] Once `CLICK TO CONTINUE` appears, scrolling should still remain disabled until the user actually clicks.
- [x] The click on `CLICK TO CONTINUE` should unlock the website.
- [x] After the click, restore normal scrolling.
- [x] Do not allow the user to bypass the loading interaction simply by scrolling.

### Click to Continue

- [x] Display `CLICK TO CONTINUE` only after the required loading sequence has completed.
- [x] Make the interaction clearly indicate that the user needs to click/tap.
- [x] On click/tap, unlock scrolling.
- [x] Transition smoothly from the loading screen into the homepage.
- [x] Ensure the interaction works on both desktop and mobile.
- [x] Prevent double-triggering or multiple transition events.

## 10. Featured Project Pages — "UP NEXT"

The `UP NEXT` section on featured project pages should become an interactive elastic navigation system.

### Normal State

- [x] Place `UP NEXT` at the end of each featured project page.
- [x] Show the next featured project clearly.
- [x] Make the section feel connected to the next page rather than behaving like a normal static footer/card.
- [x] Preserve the existing visual identity of the portfolio.

### Elastic Pull Interaction

- [x] When the user reaches the bottom of a featured project page and continues scrolling downward, the `UP NEXT` section should begin responding to the scroll.
- [x] The section should have an elastic/pull-down or pull-up feeling rather than immediately navigating.
- [x] Continued scrolling should visually pull the `UP NEXT` section further into view.
- [x] Display a progress/power indicator while the user continues pulling.
- [x] The power indicator should progressively fill based on how far the user has pulled.
- [x] The interaction should have a clear threshold.
- [x] Before reaching the threshold, releasing the scroll should cancel the navigation and allow the section to elastically return to its original position.
- [x] Once the user reaches the required threshold, the power bar should indicate that the next-page transition is armed.
- [x] Once the threshold is reached, automatically load the next featured project page.
- [x] The transition should feel intentional and cinematic rather than like a normal browser navigation.
- [x] Prevent accidental navigation from a very small scroll.
- [x] Add a small amount of resistance as the user approaches the threshold so the interaction feels elastic.
- [x] Make the interaction work with mouse wheel, trackpad and touch scrolling where technically appropriate.
- [x] Ensure the interaction doesn't trap the user or make it impossible to reach the next project.
- [x] Provide a conventional clickable `UP NEXT` fallback for users/devices where the pull interaction is unavailable.

### Page Transition

- [x] Animate the transition from the current featured project to the next project.
- [x] Preserve the portfolio's existing visual language.
- [x] Avoid an abrupt page reload feeling.
- [x] Reset the new project's scroll position appropriately after navigation.
- [x] Ensure browser Back/Forward navigation still works correctly.
- [x] Ensure direct links to individual project pages continue working.
- [x] Prevent multiple project transitions from being triggered by rapid scrolling.

## 11. Project Content

For every major project:

- [x] Project title.
- [x] Short description.
- [x] Your role.
- [x] Tools/software used.
- [x] What you created.
- [x] Creative/technical challenge.
- [x] Process where appropriate.
- [x] Final result.
- [x] Relevant project links.
- [x] Descriptive image/video `alt` text where appropriate.

### Featured Projects

- [x] Kaliya Daman — develop as a major cinematic case study.
- [x] Shiv Mahapuran / Shiv Puran — develop as a major cinematic case study.
- [x] Add the other significant AI filmmaking projects.
- [x] Add relevant 3D projects.
- [x] Add significant graphic-design work.
- [x] Add relevant video-editing work.
- [x] Prioritize quality and storytelling over simply increasing the project count.

## 12. Project Page Storytelling

For each flagship project:

- [x] Project title.
- [x] Concept.
- [x] Creative objective.
- [x] Visual direction.
- [x] Production process.
- [x] AI workflow where relevant.
- [x] Character/environment development where relevant.
- [x] Cinematography.
- [x] Editing/post-production.
- [x] Final result.
- [x] Tools used.
- [x] Your specific contribution.

The project page should communicate not only "what it looks like" but also "how Manas created it."

## 13. Performance

- [x] Compress large images.
- [x] Use modern image formats such as WebP/AVIF where appropriate.
- [x] Compress portfolio videos.
- [x] Lazy-load below-the-fold media.
- [x] Avoid loading every project asset on initial page load.
- [x] Optimize fonts.
- [x] Remove unnecessary JavaScript.
- [x] Code-split large application bundles where applicable.
- [x] Reduce unnecessary animation libraries/effects.
- [x] Check Core Web Vitals.
- [x] Test the site on a normal mobile connection.
- [x] Make the first meaningful content appear quickly.
- [x] Ensure the elastic `UP NEXT` interaction remains performant.
- [x] Avoid scroll-event implementations that cause frame drops.
- [x] Use efficient animation techniques such as transforms and requestAnimationFrame where appropriate.

## 14. Accessibility

- [x] Add meaningful `alt` text to informative images.
- [x] Use semantic HTML.
- [x] Maintain logical heading hierarchy.
- [x] Make buttons/links keyboard accessible.
- [x] Ensure sufficient text contrast.
- [x] Don't rely exclusively on animation to communicate information.
- [x] Make navigation accessible.
- [x] Give interactive elements descriptive labels.
- [x] Provide a conventional navigation fallback for the `UP NEXT` interaction.
- [x] Respect `prefers-reduced-motion` for users who have motion reduction enabled.

## 15. Personal Brand / Authority

- [x] Put the portfolio URL on LinkedIn.
- [x] Put the portfolio URL on GitHub.
- [x] Put the portfolio URL on the resume.
- [x] Add it to relevant professional/creative profiles.
- [x] Link the website back to legitimate professional profiles.
- [x] Keep the name "Manas Upadhyay" consistent across those profiles.
- [x] Use the same professional description where appropriate.
- [x] Publish/link legitimate projects that point back to the portfolio.

## 16. Domain Strategy

- [x] Keep `manasxz.qzz.io` for now if desired.
- [x] Do not expect changing the domain alone to solve SEO.
- [x] Consider purchasing a personal domain later.
- [x] If moving to a custom domain, make the custom domain the canonical production site.
- [x] Properly redirect the old `qzz.io` address to the new domain.
- [x] Update Search Console and external profiles after migration.

## 17. Final Verification

- [x] Check Google Search Console URL Inspection.
- [x] Check sitemap status.
- [x] Check robots.txt.
- [x] Check canonical URLs.
- [x] Validate structured data.
- [x] Test HTTPS.
- [x] Test mobile usability.
- [x] Test page speed.
- [x] Check social previews.
- [x] Search for `site:manasxz.qzz.io`.
- [x] Search for `"Manas Upadhyay"`.
- [x] Search for `"Manas Upadhyay" portfolio`.
- [x] Check whether Google replaces `DigitalPlat Domain` with `Manas Upadhyay`.
- [x] Test the loading screen with mouse wheel, touch, trackpad and keyboard.
- [x] Verify scrolling remains locked until `CLICK TO CONTINUE`.
- [x] Verify scrolling unlocks immediately after the click.
- [x] Test the `UP NEXT` elastic interaction on desktop.
- [x] Test the `UP NEXT` elastic interaction on mobile.
- [x] Verify the power bar threshold.
- [x] Verify accidental small scrolls do not trigger navigation.
- [x] Verify reaching the threshold loads the next project.
- [x] Verify releasing before the threshold cancels the pull.
- [x] Verify browser Back/Forward still works.
- [x] Verify direct project URLs work.
- [x] Verify reduced-motion behavior.
- [x] Recheck after Google has had time to recrawl and process the changes.