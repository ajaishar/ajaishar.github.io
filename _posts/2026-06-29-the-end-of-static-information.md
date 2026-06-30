---
layout: post
title: The End of Static Information
date: 2026-06-29 09:00:00-0700
description: Information is shifting from something we retrieve to something that responds to how we understand it — and what that means for software, accessibility, and truth.
tags: ai
categories: essays
---

{% include figure.liquid path="assets/img/end_of_static_information.png" class="img-fluid rounded z-depth-1" zoomable=true loading="eager" alt="Classical marble sculptures, a human brain, and a Greek column dissolving into neon light and sacred geometry" %}

AI is not only changing how we find information. It is changing what information is.

For most of the internet's history, information has been static. A page was written, published, and retrieved. Our job was to search for it, read it, and understand it. If the page was confusing or too technical, that was our problem. The interface could measure clicks, dwell time, or bounce rate, but it could not receive the one signal that matters most in the entire transaction:

_I am trying to understand this, and here is what is happening inside my head._

That signal has historically been invisible to software.

Search engines changed how information was discovered. Social networks changed how it was distributed. Language models changed how it could be synthesized. But the shift now underway is more fundamental than any of those, because it acts on the thing itself rather than on the plumbing:

Information is about to become responsive to the process of being understood. Not retrieval, not generation, but understanding alignment, specifically the slow closing of the gap between what a thing says and what we take it to mean. Here's the story in three acts:

## Act I: Static Information

_Where is it?_

For most of the lifespan of recorded thought, the fundamental problem of information was finding it. The document existed somewhere; the labor was locating it, and then locating yourself inside it. Vannevar Bush saw both the promise and the limit of this mode with startling clarity in 1945.

Interesting side note: [Vannevar Bush](https://en.wikipedia.org/wiki/Vannevar_Bush) headed the U.S. Office of Scientific Research and Development under Franklin Roosevelt, where he initiated and oversaw the early Manhattan Project, and later pressed for the creation of the National Science Foundation.

His essay ["As We May Think"](https://en.wikipedia.org/wiki/As_We_May_Think) imagined the [Memex](https://en.wikipedia.org/wiki/Memex), a desk that would let a researcher build associative trails between documents, similar to a private web of links threaded by hand through the corpus. That dream propagated forward almost intact: Engelbart gave it a mouse and live hypertext, Berners-Lee gave it HTML and an address for every page, and the trail became the hyperlink became the web.

Every step of that arc got radically better at one question and never once asked the other. Bush's trails, Engelbart's links, Berners-Lee's hyperlinks all answered _where is it?_ with ever more grace, and not one of them ever tried to answer _did you get it?_ The document was fixed while the reader was forced to adapt. Everything assumed that information is something presented, and understanding is something that happens afterward, privately, inside our minds. For five hundred years that was simply the deal. The text is fixed; you adapt to it.

## Act II: Generated Answers

_Here is the answer._

Language models broke the fixity of the document. You no longer retrieve a page that some author wrote for no one in particular; you state your need and a custom artifact is synthesized on-demand to match it. Query in -> Answer out, fitted to your exact request. This is new and powerful, but still something is missing.

I think of Act II as a smarter vending machine. The old machine took a coin and gave you a fixed product. The new one can synthesize a custom product to match your exact request, but still one shot per coin. You state your request and you almost immediately receive the finished answer. The machine does not see you. The burden moved and yet the experience is still reminiscent of before.

We tend to assume the missing piece is the ability to ask follow-up questions which we already have. But follow-ups are just more coins in the same machine. What is actually missing is a deeper loop, one in which your _reaction_ to a representation becomes a first-class input into how that representation is then rebuilt. Not a new request from scratch, but a response to the thing in front of you that the thing itself can absorb. Imagine the letters on the page moving around and reorganizing themselves in realtime to better suit your understanding.

Cue Act III.

## Act III: Responsive Information and Reflectivity

_Did you get it?_

In Act III, the representation itself becomes the surface that responds, not from typing a better query, but by reacting to the response in front of you. Imagine reading an explanation and being able to mark it up in the natural language of comprehension: _This part makes sense. This part is confusing. I think what you mean is this... is that right?_ And the explanation in front of you restructures. Not appends, restructures. The confusing paragraph dissolves and reforms around the place you stumbled.

We kept building underpowered versions of this for decades, because the instinct is old and the economics were wrong. Bret Victor's [explorable explanations](https://worrydream.com/Tangle/) let you drag a number inside a sentence and watch the prose recompute around it, reactive text, alive to the reader. But every degree of freedom was wired by hand, in advance, by Victor. The intelligent-tutoring researchers went further with [Bayesian Knowledge Tracing](https://en.wikipedia.org/wiki/Bayesian_Knowledge_Tracing), maintaining a hidden estimate of a learner's latent mastery and adjusting what came next, but only inside painstakingly pre-authored skill domains like algebra. Both had the right instinct, but the problem was that adaptivity had to be hand-authored, branch by branch, and could not scale to the whole of human knowledge. LLMs change this. The branches no longer have to exist _before_ the reader arrives; they can be generated, faithfully, at the moment of confusion. As Geoffrey Litt [observed](https://www.geoffreylitt.com/2023/03/25/llm-end-user-programming.html), "interesting UIs usually can't be generated in a single shot; there has to be an iterative process with the user."

Act III is that iterative process, applied not to software but to meaning.

This is not personalization in the old sense, rather personalized comprehension.

## Isn't this just chat?

A chat is ephemeral. It is a sequence of disposable turns, each consumed and discarded, and at the end you are left with a transcript that is canonical to no one, which is the same as being canonical to a statistical average of everyone. A Wikipedia article sits at the other pole: authoritative and durable, but addressed to that same statistical average, the imagined median reader who is in fact no reader at all. What I am describing is a canonical artifact that is canonical to a _person_. It is a representation of an idea that is both durable and yours. It persists like a document and it fits like a conversation.

Three differences. First, the reaction is lighter than a query, a highlight, a flicker of confusion, a "wait, why?" registered against a specific phrase, not a fully composed prompt you had to author from nothing. Second, the artifact restructures rather than appends; a chat grows by accretion at the bottom, while a responsive representation reshapes in place around where you broke. And third, most powerfully, it persists. The reactions accrete into a profile of how you, specifically, come to understand things. When your reaction reshapes a chat, you have improved one answer. When your reaction reshapes a canonical artifact, you have taught the representation something about you that it keeps. The first is a transaction; the second is the slow accretion of a relationship between a mind and a body of knowledge. One is a receipt; the other is a cognitive system of record.

## The interface becomes reflective

Why has it taken this long? Understanding is not made of clean turns. It is partial, recursive, unstable, full of small internal events. For instance, a sentence that almost lands, a definition that half-sticks, an objection that surfaces and then sinks before you can name it. Human understanding is dynamic. Our interfaces have treated it as static, as a thing that either happens or fails to happen once the page has loaded.

This is why the next important interface may not be the search box or the chat box. It may be the annotation layer. Highlighting, restating, objecting, confirming, the raw material of comprehension, the externalized human-built trace of a mind at work on a text. An interface that takes this feedback as input rather than decoration becomes a _reflective surface_: a place where your understanding is not merely expressed but acted upon.

Seen this way, each era of the web added a primitive, and the lineage points somewhere specific. The first primitive was the link. Search added the query. Social platforms added the reaction, the like, the upvote, the share. Chatbots added the prompt. The next primitive may be reflection. A reflection is not a like, a click, or even a follow-up question; it is a structured signal about your relationship to the information itself: _I understand this. I do not understand this. I think this means X. I disagree with this because Y._ Where the reaction told a platform what you felt about a post, the reflection tells a representation where it sits relative to your understanding. This shifts today's UIs from consumption to collaboration.

## From one idea to infinite renderings

That collaboration raises a hard question immediately: if the representation rebuilds itself for each reader, are we not just handing everyone their own private version of the facts? Picture every idea as having one absolute representation, call it the anchor. From that single anchor you derive an unbounded number of subjective renderings, each faithful to the anchor and each shaped to a particular mind. We are not each getting our own facts; we are each getting our own rendering of the same facts. The thing being adapted is the presentation, not the objective reality.

Here is what changes about software. For seventy years, a piece of software has been a fixed rendering of some data: one layout, one reading level, one set of assumed priors, compiled once and shipped to everyone. Maybe you had light and dark mode, or big and small font sizes. In Act III, the unit becomes the _generator_ of renderings: you ship one canonical representation of the data and a model that projects it, live, into whatever interface a given reader can actually receive. One representation; infinite faithful representations. In the old model, software exposed information. Today, software negotiates understanding.

## The user model becomes infrastructure

For information to project itself differently into different minds, the system needs a model of the mind it is projecting into, a model of _understanding_: what you already know, where your priors are strong, which explanations have landed for you before and which have bounced off. One could see this as a continuation of [Peter Brusilovsky's work on adaptive hypermedia](https://link.springer.com/article/10.1023/A:1011143116306) in the 1990s, where systems maintained a model of each user's goals, knowledge, and preferences and adapted both content and navigation accordingly. What was once confined to a research prototype with hand-built domain maps becomes, here, general (AI?) infrastructure.

Interestingly, a model of your understanding is also a model of your blind spots, these are duals, and accordingly, a system holding them can choose what to do with them. While the representation can adapt, the truth cannot be quietly edited to fit the user. And since alignment to user preferences can end in sycophancy, the goal has to be alignment between the user's understanding and the underlying reality. The user model is the instrument that makes this alignment possible, and it is the same instrument that makes its opposite possible too.

## Agents will not need this in the same way

It is worth being precise about who this is for, because a tempting generalization is wrong. Picture two AI agents talking to each other. Not to you, to each other. They exchange information at speed, each confident it has understood the other, and when they have not, nothing in the exchange stops them: they never turn back and say _wait, what did you mean?_ They proceed, fluent and mistaken, building elaborate structures on a misread that neither has any mechanism to surface.

What is missing between them has a name. Herbert Clark and Susan Brennan called it [grounding in communication](https://en.wikipedia.org/wiki/Grounding_in_communication): the constant, mostly invisible work two people do to establish that an utterance has been understood: presenting, accepting, and above all _repairing_ when acceptance fails. Humans ground reflexively. Agents, as [recent work on human-agent communication](https://arxiv.org/pdf/2412.10380) notes, often do not, and the hallucinatory failures compound silently.

But the deeper point is not that agents lack repair machinery, it is that they do not sense the need for what responsive information provides. Perhaps, as a nod to the wisdom traditions of yore, _now, therefore, the inquiry into the absolute_ — [Vedanta Sutra 1.1.1](https://www.purebhakti.com/teachers/bhakti-discourses/18-discourses-1990s/1548-bathe-in-the-rasa-samudra#:~:text=athato%20brahma%20jijnasa) — is the existential characteristic of what it means to be human.

An agent does not perceive confusion in the human sense. It does not need an idea to become intuitive, to be re-rendered until it clicks, to be met where understanding can begin. There isn't a self-verifiable proof of understanding or a notion of 'clicking' insofar as multi-head attention or transformer architectures may admit, though [higher-order abstraction and concretization](https://transformer-circuits.pub/2024/scaling-monosemanticity/) may be admitted. Hybrid agentic systems with lean4 type theorem proof architectures may provide proof of correctness but proof of understanding (short of evals and benchmarks) as of today, is not a well-solved problem.

A human-facing information system has to optimize for comprehension, trust, attention, and cognitive fit, which sometimes means using more words rather than fewer, a picture rather than a proof, a story rather than a spec. The two are not the same system pointed at different users; they are different systems. The interface will evolve to be where machine-readable reality is translated into human-understandable meaning.

## The risk of false understanding

Pointed carelessly, the same machinery produces two failures, and both feel like success from the inside.

The first is that comprehension is not truth. A system optimizing for the _feeling_ of understanding will produce explanations that are smooth, intuitive, and sometimes wrong, and, more insidiously, it will strip out the friction that learning requires. Robert Bjork's work on [desirable difficulties](https://en.wikipedia.org/wiki/Desirable_difficulty) shows that the very friction a system would most want to remove, the effortful retrieval, the moment of productive struggle, is frequently the mechanism that makes knowledge stick. Remove it and you have built a machine for forgetting comfortably: every explanation lands, nothing lasts. Good teaching does not make everything easy. Responsive information should not mean frictionless information; it should mean appropriately adaptive information, tuned for durable understanding rather than the comfortable feeling of an explanation that asked nothing of you. At the same time, such interfaces, if well-designed, may become the most powerful counter to the above concern.

The second danger is older and already has a name. Eli Pariser warned in 2011 about the [filter bubble](https://en.wikipedia.org/wiki/Filter_bubble): personalization sliding into intellectual isolation. The twist here is subtler and worse. A system tuned to your comprehension can slide, almost imperceptibly, into a system tuned to your _agreement_. We discussed this above with the sycophancy problem. (As an exercise, share an opinion or research idea with one model, and ask another model what it thinks, and then reverse it, you will get a sense for which model is glazing, and which, perhaps is deglazing.)

Underneath both dangers is a single question: who controls the loop? Aim the same architecture at engagement and Act III is not a tutor at all, it becomes the most persuasive instrument ever built, a thing that learns precisely how your understanding works in order to manage rather than expand it. Aim it at your comprehension and it is the opposite.

## Accessibility becomes universal

There is a familiar shape to how this resolves well, and it comes from architecture. You cut a ramp into a curb for the person in the wheelchair, and then you watch who actually uses it: the parent with the stroller, the traveler dragging a suitcase, the worker with the hand truck, the kid on the bike. The curb-cut effect — the [repeated discovery](https://www.boia.org/blog/the-digital-curb-cut-effect-the-universal-benefits-of-web-accessibility) that an accommodation built for a few becomes a convenience for everyone. Captions were cut for the deaf and now run in every loud bar. Voice control was cut for people who could not type. Dark mode began as an accommodation and became a default.

For my whole life, accessibility has meant sensory and motor access, can you perceive the content, can you operate the controls. There is another layer underneath it: epistemic accessibility. Can this _idea_ be reached by this _person_? We have never seriously cut a ramp for cognitive access, because until now no single artifact could bend to the reader without an author bending it by hand. The point is not that some people are slow and need help. Everyone is an expert in some rooms and a confused beginner in others; no single representation is equally reachable by every mind, including the most capable, on the day it meets the wrong subject. A representation that meets each reader where understanding can begin is not a crutch for the few. It is a curb cut for cognition, and like every curb cut before it, the people who do not think they need it will end up using it most.

## The end of static information

Static information will not disappear. There will always be the fixed page, the canonical text, the thing written once and left alone, and there should be. But the layer between humans and information is changing underneath us. The web gave us access; search gave us retrieval; language models gave us synthesis; responsive information gives us adaptive understanding. Every information object can come to hold a stable core and an adaptive surface, one source of truth, many possible representations, each shaped by the human trying to understand it. The future of information is not just personalized. It is reflective.

Which returns me to the oldest object in the argument. For five hundred years the book has been the thing that holds still while you climb toward it. The book is about to look up and ask whether you got it. Whether that is the best thing we have ever built or the most persuasive depends on nothing in the architecture and everything in us, on whether we have the discipline to point it at comprehension that lasts, rather than at the warm feeling of a wall we never had to climb.

## Sources & Further Reading

- **Vannevar Bush, "As We May Think" (_The Atlantic_, 1945).** The essay that imagined the Memex and associative trails. [Essay](https://en.wikipedia.org/wiki/As_We_May_Think) · [Memex](https://en.wikipedia.org/wiki/Memex) · [Bush biography](https://en.wikipedia.org/wiki/Vannevar_Bush)
- **Bret Victor, "Explorable Explanations" / Tangle (2011).** Reactive prose whose every degree of freedom was wired by hand, in advance. [Link](https://worrydream.com/Tangle/)
- **Bayesian Knowledge Tracing (intelligent tutoring systems, 1990s).** A hidden estimate of a learner's latent mastery, used to choose what comes next — inside pre-authored skill domains. [Link](https://en.wikipedia.org/wiki/Bayesian_Knowledge_Tracing)
- **Geoffrey Litt, "Malleable Software in the Age of LLMs" (2023).** "Interesting UIs usually can't be generated in a single shot; there has to be an iterative process with the user." [Link](https://www.geoffreylitt.com/2023/03/25/llm-end-user-programming.html)
- **Vedanta Sutra (Brahma Sutra) 1.1.1, _athāto brahma jijñāsā_.** "Now, therefore, the inquiry into the Absolute" — the opening aphorism of Vedanta, glossed here in the Gaudiya Vaishnava tradition by Bhaktivedanta Narayana Gosvami ("Bathe in the Rasa-samudra," 1996). [Link](https://www.purebhakti.com/teachers/bhakti-discourses/18-discourses-1990s/1548-bathe-in-the-rasa-samudra#:~:text=athato%20brahma%20jijnasa)
- **Anthropic, "Scaling Monosemanticity" (2024).** Sparse-autoencoder features inside a transformer that are highly abstract and "generalize between concrete and abstract references," organized roughly by depth. [Link](https://transformer-circuits.pub/2024/scaling-monosemanticity/)
- **Herbert Clark & Susan Brennan, "Grounding in Communication" (1991).** The presentation–acceptance–repair loop by which people establish mutual understanding. [Link](https://en.wikipedia.org/wiki/Grounding_in_communication)
- **"Challenges in Human-Agent Communication" (arXiv, 2024).** On how agents fail to ground and repair the way people do. [Link](https://arxiv.org/pdf/2412.10380)
- **Robert Bjork, "desirable difficulties."** Friction and effortful retrieval are often what make knowledge durable. [Link](https://en.wikipedia.org/wiki/Desirable_difficulty)
- **Eli Pariser, _The Filter Bubble_ (2011).** Personalization sliding into intellectual isolation. [Link](https://en.wikipedia.org/wiki/Filter_bubble)
- **The curb-cut effect.** Accommodations built for a few become conveniences for everyone. [Link](https://www.boia.org/blog/the-digital-curb-cut-effect-the-universal-benefits-of-web-accessibility)
- **Peter Brusilovsky, "Methods and Techniques of Adaptive Hypermedia" (1996; expanded as "Adaptive Hypermedia," 2001).** The direct ancestor of the user-model-as-infrastructure idea: systems that model each user's goals, knowledge, and preferences, then adapt both content and navigation. [Link](https://link.springer.com/article/10.1023/A:1011143116306)
- **Peter Pirolli & Stuart Card, "Information Foraging" (_Psychological Review_, 1999; Xerox PARC).** People seek information the way animals forage for food, following "information scent" — the proximal cues, like links and citations, that hint at where understanding lies. [Link](https://www.nngroup.com/articles/information-foraging/)
- **Eric Horvitz, "Principles of Mixed-Initiative User Interfaces" (CHI 1999).** An elegant account of coupling automated services with direct manipulation — humans and machines sharing control under uncertainty, and a useful frame for the reflection loop. [Link](http://erichorvitz.com/mixedinit.htm)
