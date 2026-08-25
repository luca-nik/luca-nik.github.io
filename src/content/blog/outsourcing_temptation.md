---
title: "Outsourcing the Temptation"
excerpt: "How I vibe-coded a language-learning app so I could stop building it and start using it"
date: 2026-08-18
tags: [thoughts, vibe-coding]
coverImage: "/images/posts/outsourcing-temptation/image6.jpg"
---

*How I vibe-coded a language-learning app so I could stop building it and start using it*

## Chapter 1: When the Tool Became the Distraction
Three years ago, around this time of year, I decided to learn Spanish.

I tried to be honest with myself. Considering the free time I had, I was never going to become flawless, nor did I want to. My goal was simply to become proficient enough to hold reasonably fluent conversations with native speakers.

So I went to a shop, bought a high-school Spanish textbook, and started studying a little every day. I am not known for my strict discipline. I have always felt that discipline kills my creative side. Still, the Spanish break after my morning coffee soon became a pleasant routine, and I managed to stick to it for several months.

<figure>
  <img src="/images/posts/outsourcing-temptation/image1.jpg" alt="My high-school Spanish textbook." />
  <figcaption>My high-school Spanish textbook.</figcaption>
</figure>

Soon, however, I ran into an issue that was slowing me down: vocabulary! 

Learning grammar was relatively simple because the book was well structured. Learning enough words to actually form sentences was much harder.

Whenever I encountered a new word, I looked up its translation and wrote it in a notebook, with Spanish in one column and Italian in the other. Every morning, I covered one column and tried to guess the hidden words.

This system had two problems for me.

First, being lazy, I followed the path of least resistance. Instead of internalizing what each word meant, I memorized the visual pattern of word and translation. I could match the pairs correctly, but when I needed a word in a real sentence, it disappeared. Apparently, I needed the physical layout of the page to remember it.

Second, being disorganized, I often lost the notebook or forgot it at home. New words ended up on random pieces of paper, which were then systematically lost forever.

Fed up with the slow progress, I decided to try something else. Instead of changing myself, which I live well with and I was neither willing nor interested in doing just to learn a few Spanish words, I changed the system of learning to fit my strengths and weaknesses: I built my own language-learning app.

<figure>
  <img src="/images/posts/outsourcing-temptation/image2.png" alt="The first version: a cron-triggered quiz in my terminal." />
  <figcaption>The first version: a cron-triggered quiz in my terminal.</figcaption>
</figure>

Back then, I was still doing my PhD in Theoretical Chemistry. The app was a very simple Python program triggered by a cron job on my computer and running in my terminal. Yes, on the terminal... such a great UX, right?!  Then again, we were writing algorithms for complex matrix multiplications in Fortran 90 using `vi`. Tbh, we had been anesthetized to garbage UX.

Once every hour, while I was working, a small test popped up and interrupted my job. Was it annoying? Absolutely. But that was the point.

The game was a digital version of my notebook. It picked a few words from a database, showed them in either Spanish or Italian, and asked me to recall the translation. Pressing Enter revealed the answer. Then I pressed `y` or `n`, depending on whether I had got it right.

There was no formal check. What would be the point of lying to myself?

<figure>
  <img src="/images/posts/outsourcing-temptation/image3.png" alt="Every hour, a few words. Recall, press Enter, self-grade." />
  <figcaption>Every hour, a few words. Recall, press Enter, self-grade.</figcaption>
</figure>

Behind the game was a primitive scheduling algorithm. Each word had a score that decreased over time. The app selected the words with the lowest scores. A correct answer increased a word’s score, pushing it further into the future. A wrong answer left it where it was.

It sounds silly, but I kept playing. The interruptions were annoying without being annoying enough to make me quit. Thanks to that stupid little game, I still remember that *embarazada* definitely does not mean *imbarazzata* in Italian. It has probably spared me a few memorable gaffes.

With use, however, the app started to feel too simple and clunky. No wonder, right?

<figure>
  <img src="/images/posts/outsourcing-temptation/image4.png" alt="The whole interface. Peak UX, PhD days." />
  <figcaption>The whole interface. Peak UX, PhD days.</figcaption>
</figure>

Worse, being geeky, my interest slowly shifted away from learning Spanish and toward improving the app. I wanted to refine the interface, adjust the scheduler, and find smarter ways of selecting useful words. Building the tool was starting to consume the time I was supposed to spend using it.

I knew where this was going, so I removed the temptation and downloaded Anki.

Anki is the reference open-source flashcard app. It has a battle-tested spaced-repetition engine, decks for almost everything, and a user interface that looks like it was designed to file your taxes.

<figure>
  <img src="/images/posts/outsourcing-temptation/image5.jpeg" alt="Anki: a UI designed to file your taxes, but it works." />
  <figcaption>Anki: a UI designed to file your taxes, but it works.</figcaption>
</figure>

Ugly, but it works.

In the end, things worked out. I am now reasonably happy with my Spanish. I am obviously not a native speaker, but I can travel around Spain and speak comfortably with people.

More importantly, I had fun.

## Chapter 2: Outsourcing the Temptation
This year, I went back to EthCC, the Ethereum conference in Cannes. Afterwards, I visited Marseille and fell in love with the area. Deep-blue sea, rock-climbing opportunities everywhere, and a lively city. That was enough to make me want to learn French.

<figure>
  <img src="/images/posts/outsourcing-temptation/image6.jpg" alt="The Calanques near Marseille — the reason for all this." />
  <figcaption>The Calanques near Marseille — the reason for all this.</figcaption>
</figure>

Italian native speakers know that French is a different beast from Spanish. The pronunciation, irregular verbs, exceptions, and exceptions to the exceptions make it considerably more difficult.

But again, who cares if I make mistakes?

I do not need to pass a C1 exam. I just want to understand French people and speak to them without sounding too maccheronish.

I already knew the pattern. I went to a bookshop, bought a high-school French textbook, and went straight back to Anki to start a new deck.

This time, though, something felt different.

After almost three years in the blockchain and software engineering world, Anki suddenly seemed too clumsy, rigid, and old-fashioned. It was still a great tool, but it was not personalized around what I actually wanted to achieve.

Naturally, I returned to my number-one solution: a terminal-based app.

Of course not..

I did, however, decide to build another personal app. The difference was that, unlike three years ago, coding agents now existed to do most of the work for me.

I was also aware of the trap I had fallen into the first time. So, sitting on a bench in the shade of a beech tree during this torrid Italian summer, I defined four guardrails:

1. I would spend no more than two hours building the first version.  
2. I would learn as little as possible about the code. The less I knew, the less tempted I would be to modify it.  
3. The app had to be easy to upgrade, especially its memory algorithm, without requiring changes to the rest of the system.  
4. It had to have a modern UX and be mobile-first.

<figure>
  <img src="/images/posts/outsourcing-temptation/image7.jpg" alt="The bench under the beech tree where the four guardrails were written." />
  <figcaption>The bench under the beech tree where the four guardrails were written.</figcaption>
</figure>

For all these reasons, I made a very difficult decision for me: I would fully vibe-code the app.

I gave the coding agent a blueprint of what I needed and deliberately avoided reading the implementation. Hiding the code from myself was the best way to keep my attention on French instead of shifting it toward yet another silly app.

Learning a language is also kind of a vibe. The system does not need to be extremely precise for my goals. I score my own answers, notice what works and what annoys me, and report that back to the coding agent. The agent can then update the app quickly while I remain blissfully ignorant of how it does so.

This was the first time I had fully vibe-coded an app, and giving the agent free rein felt weird. Of course, I still discussed the plan with it beforehand. I could not lose control completely.

The result is iBaloss, a small Progressive Web App (PWA) that lives on my phone’s home screen and does exactly what my notebook never could.

<figure>
  <img src="/images/posts/outsourcing-temptation/image8.jpeg" alt="iBaloss on my phone's home screen." />
  <figcaption>iBaloss on my phone's home screen.</figcaption>
</figure>

I add the words from the chapter I am studying, with Italian on one side and French on the other. I can also add verbs, together with their conjugation tables, tense by tense, as I learn them.

Every day, the app builds a session from the cards that are due, prioritizing those that are overdue or that I often fail, then adding a handful of new ones. Words are shown in a random direction each time, either Italian to French or French to Italian.

Verbs work differently. The app might ask:

> Conjugate *finir*, imparfait, nous.

I type the answer, accents included, and the app checks it exactly.

Behind the scenes is a simplified SM-2 scheduler, from the same family of spaced-repetition algorithms popularized by Anki. Cards I fail return almost immediately. Cards I know return after an interval that grows with each successful answer.

<figure>
  <img src="/images/posts/outsourcing-temptation/image9.jpeg" alt="A review session in iBaloss." />
  <figcaption>A review session in iBaloss.</figcaption>
</figure>

The app works fully offline. When online, it saves a snapshot of my data to the cloud, so if I lose the phone while getting extremely angry, I can still save my French vocabulary.

The first working version took roughly the two hours I had budgeted on that bench. Since then, the only work I have done on it has been to describe what annoyed me while using it and let the AI fix it in seconds.

Three years ago the trap was clear: building the tool ate the time meant for using it. This time I outsourced the temptation. The agent gets to obsess over the engineering. I get to learn French. The app is imperfect. So is my French. For once, I am spending my time improving the right one, though.
