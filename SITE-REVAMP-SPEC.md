# baaz.dev revamp: structure and page copy

*Spec for the site rebuild. Seven pages plus the blog. Every page's copy is final draft and can be built as written. Repository notes for the coding agent are at the end.*

*Revised 2026-11-17 from the design canvas "BaaZ site pages": the networking, energy, open source and about pages, the menu, the footer and the redirects below follow the canvas frames. Where this file and the built pages disagree, the canvas wins.*

## 1. Positioning

**The line.** BaaZ designs GPU deployments and builds the software that runs them: which hardware, where it sits, how it is powered and connected, and everything from the operating system up.

**The boundary** (About page only): We do not build data centers, assemble racks or sell hardware. We decide what goes where and make it run.

**Two kinds of deployment, and nothing else on the site.**

- **GPU networking on Kubernetes.** Buyer: anyone standing up or operating a GPU cluster who needs the RDMA fabric to work: regional and sovereign clouds, integrators and resellers delivering clusters, enterprises with on-prem GPUs. Offer: fabric design, bring-up, and NVIDIA's networking stack on Kubernetes, sold as three packages. Proof: the changes BaaZ has contributed to that stack.
- **Distributed GPU compute at energy sites.** Buyer: companies with sites and power entering compute: solar and battery retailers, virtual power plant operators, modular and edge compute builders. Offer: a deployment design, then a pilot that runs end to end, then the software, handed over with the code. Proof: the whitepaper and, once public, the open-source pilot.

**Rules for every word on the site.**

- No client is named anywhere, in copy, images, blog posts or alt text, until there is written consent. A build check enforces this (section 7).
- No other company or product is named as a comparison. Vendor software we run or contribute to is named by its project name only.
- Contributions are described as "we contribute to", never as ours. Count and name only merged changes.
- No figures BaaZ cannot back with its own delivery: no utilization, speed-up or cost numbers, no fleet sizes, no "proven" or "in production" for the energy-sites work. The page says what we design, build and measure.
- No "technologies we work with" lists, no FAQ sections, no process diagrams, no testimonials.
- Plain words. Tunnel, not overlay. Security chip, not TPM. Its own lane on the router, not VLAN. Power readings, not telemetry, when talking to the energy side.
- US spelling, matching the existing site. The solutions copy from the October design is converted.
- Short sentences, no em dashes in headings, no exclamation marks, nothing that reads as marketing.

## 2. Site map

| Page           | URL                             | Job                                                                                      |
|----------------|---------------------------------|------------------------------------------------------------------------------------------|
| Home           | /                               | The line, two doors, proof strip, one call to action                                     |
| GPU networking | /networking                     | Networking landing page. One action: Book a GPU Cluster Audit                            |
| Case study     | /case-studies/rdma-kubernetes   | The RDMA write-up, without figures, linked from /networking                              |
| Energy sites   | /distributed-gpu-compute        | Energy landing page. One action: Talk to us                                              |
| Open source    | /open-source                    | One table of the merged pull requests                                                    |
| About          | /about                          | Who we are, and how we work with partners                                                |
| Contact        | /contact                        | Unchanged, one line added                                                                |
| Blog           | /blog                           | Unchanged. Every post tagged networking or energy-sites. New posts only on those topics. |

**Menu**, left to right: Networking · Distributed GPU compute · Open source · Blog · About, then one button. The button opens the booking page (cal.com/baazhq): "Book a GPU Cluster Audit" on every page except the energy page, where it is "Talk to us". On a phone a short button stays in the top bar; a long one is the first item of the open menu. The word Solutions is not used.

**Footer**: the logo with LinkedIn, GitHub and email links · Services (Networking, Distributed GPU compute) · Company (About, Open source, Blog, Contact). Below: "© 2026 BaaZ".

## 3. Retired pages and redirects

Every retired or moved URL returns a 301, with and without a trailing slash, so nothing indexed dies. Any retired page with real clicks in Google Search Console over the last three months can come back as a short page under its door instead; record the decision in this table.

| Retired URL                                     | 301 to                    | Search Console |
|-------------------------------------------------|---------------------------|----------------|
| /services                                       | /networking               |                |
| /services/ai-factory                            | /networking#layers        |                |
| /services/distributed-training                  | /networking#traffic       |                |
| /services/gpu-networking                        | /networking               |                |
| /services/gpu-kubernetes                        | /networking#layers        |                |
| /services/gpu-monitoring                        | /networking               |                |
| /case-studies                                   | /networking#open-source   |                |
| /audit                                          | /networking#audit         |                |
| /partners                                       | /about#partners           |                |
| /solutions                                      | /distributed-gpu-compute  |                |
| /solutions/distributed-gpu-compute-energy-sites | /distributed-gpu-compute  |                |
| /energy (short link)                            | /distributed-gpu-compute  |                |

/case-studies/rdma-kubernetes keeps its address and stays a page.

## 4. Page copy

### 4.1 Home

Title tag: GPU deployments, designed and run \| BaaZ  
Meta description: BaaZ designs GPU deployments and builds the software that runs them: RDMA fabrics on Kubernetes, and distributed GPU compute at energy sites.

**Eyebrow:** GPU infrastructure engineering

**H1:** BaaZ designs GPU deployments and builds the software that runs them.

**Lead:** Which hardware, where it sits, how it is powered and connected, and everything from the operating system up. Two kinds of deployment.

**Door 1 (left). H2:** GPU networking on Kubernetes

The network decides what a cluster's GPUs are worth. We design the fabric, bring it up, and run NVIDIA's networking stack on Kubernetes, which we also contribute to.

- Fabric acceptance
- Network Operator deployment and upgrades
- Secondary networks for training and storage

Six changes merged into NVIDIA's networking software in 2026.

Link: GPU networking

**Door 2 (right). H2:** Distributed GPU compute at energy sites

GPU pods at homes, batteries and solar sites, run as one fleet that follows the power. We decide the hardware and what the site must provide, then build the software: the pod, the fleet, and the agent that reads the site's power.

- Deployment design, fixed fee
- Pilot, end to end before hardware is bought
- Whitepaper on request

Link: Energy sites

**Proof strip (one row, text only, no logos):** Code we contribute to: network-operator, ipoib-cni, doca-driver-build, KAI Scheduler. Link: Open source

**Call to action. H2:** Tell us about the deployment.  
We will tell you what it needs, on one call. Button: Talk to us (/contact)

Nothing else on the page: no feature grid, no "who we help", no blog teasers, no credentials row.

### 4.2 GPU networking (/networking)

Reader: someone who runs a GPU cluster on Kubernetes (a head of infrastructure, a platform lead or a CTO). This page uses their terms: underlay, overlay, RDMA, SR-IOV, PFC, ECN. One action: Book a GPU Cluster Audit, in the menu, under the headline, in the offer and at the end; each opens the booking page.

Title tag: GPU Cluster Networking on Kubernetes \| BaaZ  
Meta description: Network design for GPU clusters on Kubernetes: a switch underlay for RDMA training, a pod overlay for inference and developer traffic, and a two-week audit.  
og:title: One GPU cluster, three kinds of traffic

**Eyebrow:** GPU cluster networking on Kubernetes

**H1 (two lines):** One GPU cluster, / three kinds of traffic

**Lead:** Training, inference and developer work each need something different from the network. We design and configure it so each one gets its own path, from the switches up to the pods.

Button: Book a GPU Cluster Audit

**H2 (anchor: traffic):** Each kind of traffic, and the path it takes

Training traffic runs straight on the switch fabric and never enters the pod network. Inference and developer traffic stay on the pod network.

Drawing: the pod network (overlay) above two GPU nodes, the switch fabric (underlay) under them; requests and developer sessions come in through a gateway; each training pod has a second interface, net1, through the NIC to the leaf and spine switches. Numbered 1 training, 2 inference, 3 developer work. On a phone the overlay and the fabric stand upright on either side of the nodes.

| Traffic | What it carries | What it needs |
|---|---|---|
| 1 East-west. **Training** | Gradients between GPUs on different servers, at every step of a job. | RDMA on a lossless path, at the full speed of the link. |
| 2 North-south. **Inference** | Requests from users and applications, and the responses streamed back. | Low, steady latency, and one stable address in front of every replica. |
| 3 North-south. **Developer work** | Notebooks, terminals and dashboards: many small sessions through the day. | Access for each person, and a boundary between teams. |

Storage and out-of-band management run on networks of their own.

**H2 (anchor: layers):** What we configure, from the switch to the pod

- Underlay. **Switches and links:** Leaf and spine layout, link speeds and oversubscription · A lossless class for RDMA, with PFC and ECN set the same way on switches and NICs · MTU and DSCP matched end to end, ECMP across the spines · On InfiniBand: subnet manager, partition keys and adaptive routing
- Overlay. **Tenant and pod networks:** VXLAN segments and VRFs on the switches, where tenants share a fabric · The pod network, with encapsulation that fits inside the underlay's MTU · A load balancer and a gateway for traffic from outside · A namespace and a network policy for each team
- Secondary networks. **The second interface in a pod:** Host-device when one pod owns the whole NIC · SR-IOV when several pods share a NIC, each isolated in hardware · IPoIB on InfiniBand fabrics · Macvlan for development and single-NIC servers

**H2 (anchor: audit), eyebrow "The offer":** The GPU Cluster Audit

Two weeks on a cluster you already run. We test each path under load, fix what is safe to fix, and hand you the rest as a plan.

You get: Test results from before and after · What is wrong, in order of priority · A fix plan, handed over to your team. Button: Book a GPU Cluster Audit

**H2 (anchor: open-source):** Write-ups and open source

From our blog: Secondary networks for GPU workloads in Kubernetes · Dual-network Kubernetes pods with RDMA · ECMP hash collisions in a fat-tree · RDMA on bare-metal Kubernetes (Case study, to /case-studies/rdma-kubernetes).

Merged upstream, each change linked to its pull request: network-operator: One global configuration for the NIC cluster policy. MTU for IPoIB networks. Access mode for NIC firmware storage. Pod restarts on RDMA, SR-IOV and Multus changes. · ipoib-cni: MTU support. · doca-driver-build: NFS tools on the host, for NFS over RDMA.

Changes we contributed to NVIDIA's open-source networking software. Link: See the full list (/open-source)

**Closing:** the button alone, no heading.

Still to decide (kept off the page): cost; what the customer keeps if the audit finds nothing; credentials; whether the audit covers more than the network. To confirm: the inference row, the developer row and the three pod-network lines have no published post behind them yet.

**Case study (/case-studies/rdma-kubernetes):** the body of the original RDMA case study, without any figures, same text and diagrams. Title tag: RDMA on bare-metal Kubernetes \| BaaZ. Breadcrumb Home › Networking › Case study.

### 4.3 Solutions (/solutions)

Retired. 301 to /distributed-gpu-compute.

### 4.4 Distributed GPU compute at energy sites (/distributed-gpu-compute)

Reader: a CEO or technology executive at a company with sites and power who has never heard of BaaZ, arriving from a message, a referral or search. One action: Talk to us, in the menu, under the headline and at the end; each opens the booking page. The whitepaper, site types and customer segments are kept for outreach: no solar, batteries or homes on the page, and no list of who it is built for. The energy system is the customer's; the page claims nothing about managing or controlling energy. Words not on the page: Kubernetes, operating system, agent, tunnel, enrollment, gateway, control plane, telemetry, power limit, depot, inference.

Title tag: Distributed GPU Compute at Energy Sites \| BaaZ  
Meta description: BaaZ designs and builds distributed GPU compute for companies with sites and power: GPU pods at your sites, run as one fleet your team owns.  
og:title: Turn your energy sites into GPU compute you can sell

**Eyebrow:** Distributed GPU compute at energy sites

**H1 (two lines):** Turn your energy sites / into GPU compute you can sell

**Lead:** BaaZ designs and builds distributed GPU compute for companies with sites and power: GPU pods at your sites, run as one fleet your team owns.

Button: Talk to us

Drawing (anchor: how), left to right from 900 px, top to bottom below: at each site, your energy system powers a GPU pod; the pods run as one fleet; your customers buy the compute. Captions: Power you already have · One fleet, run by your team · Compute your customers buy.

**H2 (anchor: build):** What we design and build

Everything between the power at your sites and the compute your customers buy. We configure existing software and write only what is missing.

- **The pod.** The right GPU hardware for your sites, ready for your suppliers to deliver.
- **The site.** What each site must provide, and an install your own crews can do.
- **Power.** Your energy system stays in charge. The fleet works within the limits it sets.
- **The fleet.** Every pod run from one place by your team, without routine site visits.
- **Security.** Hardware and customer workloads protected at sites nobody staffs.
- **Revenue.** Compute your customers can buy, and the numbers behind every site.

**H2 (anchor: offer):** What you get

1. **A deployment design.** What to buy, what each site needs, and how you will know it pays.
2. **A working pilot.** The whole system running end to end before you commit to a fleet.
3. **Your platform.** The software, the code and the runbooks, handed over to your team.

**H2 (anchor: proof), eyebrow "Why BaaZ":** GPU infrastructure is all we do

- **We contribute to NVIDIA's open-source software.** Merged changes in the infrastructure software GPU clusters run on. Link: See the contributions (/open-source)
- **We work from the rack up.** We have built and run GPU clusters end to end, from hardware to workload.
- **Founder-led.** The engineer on your first call is the engineer who does the work.

**Closing. H2:** Planning GPU compute at your energy sites?  
Button: Talk to us. Under it: Tell us about the sites. In one call we will tell you what it would take.

Still to decide (kept off the page): length and price; whether the three steps get a name, as the audit has.

### 4.5 Open source (/open-source)

Title tag: Open Source \| BaaZ  
Meta description: The open-source projects BaaZ contributes to, with the status of each pull request: NVIDIA's networking software for Kubernetes and the KAI Scheduler.

**H1:** Open source. No other heading.

**Lead:** Changes we contributed to NVIDIA's open-source networking software and to the KAI Scheduler. Each row links to the pull request.

One table, newest first, each row linking to github.com/\<project\>/pull/\<number\>. The month is the month of the merge. A new pull request is added as Open and changes to Merged when it lands; one closed without a merge is not listed.

| Project | Pull request | Status |
|---|---|---|
| Mellanox/network-operator | \#3266 Configurable access mode for NIC firmware storage | Merged, Oct 2026 |
| Mellanox/network-operator | \#3147 MTU setting for IPoIB networks | Merged, Oct 2026 |
| Mellanox/doca-driver-build | \#299 NFS tools installed on the host for NFS over RDMA | Merged, Sep 2026 |
| Mellanox/ipoib-cni | \#132 MTU support | Merged, Jun 2026 |
| kai-scheduler/KAI-Scheduler | \#1382 Security contexts for the pods that reserve GPUs | Merged, Apr 2026 |
| kai-scheduler/KAI-Scheduler | \#857 Queue validator | Merged, Mar 2026 |
| Mellanox/network-operator | \#2070 One global configuration for the NIC cluster policy | Merged, Mar 2026 |
| Mellanox/network-operator | \#2035 Pods restart on RDMA, SR-IOV and Multus changes | Merged, Jan 2026 |

Under the table: Status as on GitHub, November 2026.

### 4.6 About (/about)

Title tag: About \| BaaZ  
Meta description: BaaZ is a founder-led GPU infrastructure boutique. The engineer you talk to on the first call is the engineer doing the work.

**H1:** About BaaZ

BaaZ is a founder-led GPU infrastructure boutique. The engineer you talk to on the first call is the engineer doing the work. We have run these systems in production and we contribute to the software we run.

**H2 (anchor: partners):** Working with partners

Integrators, resellers and GPU cloud providers bring us in for the layer between the hardware and the workloads, under their name or ours.

Link: Talk to us (/contact)

### 4.7 Contact (/contact)

Unchanged, with one line added above the form: "Tell us which it is: a cluster's network, or compute at sites. One line about the deployment is enough." The email-capture block on this page is removed.

## 5. SEO notes

- Canonical on every page is its own URL. Sitemap is automatic; confirm the pages in section 2 are in it and the retired ones are not.
- Structured data through the Head component: Organization on the home page; Service on /networking (name "GPU Cluster Audit") and on the energy page (name "Distributed GPU compute at energy sites"), provider BaaZ, areaServed Worldwide; BreadcrumbList on every inner page (Home › Networking, Home › Distributed GPU compute).
- Open Graph image per page: the home image stays; /networking and the energy page each get their drawing with the H1 above it, 1200 × 630.
- Primary terms: GPU cluster networking on Kubernetes in the networking title, eyebrow and lead; "Distributed GPU compute at energy sites" in the energy title tag, the line above the H1 and the first sentence. Each where it reads naturally, nowhere else.
- Internal links: home to both landing pages and to /open-source; /networking to the three posts, the case study and /open-source; the energy page to /open-source; every blog post's end block links to the landing page its tag belongs to.

## 6. Forms

No form is on the site. The whitepaper is sent through outreach, by hand from adheip@baaz.dev. Every Book a GPU Cluster Audit and Talk to us button opens the booking page.

## 7. Build notes for the coding agent

Repository: github.com/AdheipSingh/datainfra-website, Docusaurus, deployed on Vercel. Work on a branch; the Vercel preview is the review.

- **Pages.** Rewrite src/pages/index.js. Add src/pages/networking/index.jsx, src/pages/solutions/index.jsx, src/pages/solutions/distributed-gpu-compute-energy-sites.jsx and src/pages/open-source/index.jsx, each with its own styles.module.css. Rewrite src/pages/about/index.jsx. Remove src/pages/services/, src/pages/case-studies/, src/pages/audit/ and src/pages/partners/ once their redirects are in, except any page the Search Console check keeps.
- **Do not reuse ServiceDetail** for the new pages: it renders a technologies list, FAQs and a four-step process, which the rules exclude. Build a small SolutionDetail and a NetworkingPage from the existing layout primitives in src/components/Layout.
- **Navbar and footer** are the custom components src/components/Layout/Navbar.jsx and Footer.jsx, not docusaurus.config.js. Replace the Services dropdown with the items in section 2.
- **Redirects** go in vercel.json under redirects, status 301, one entry per row in section 3, both with and without a trailing slash as the existing /demo entries do.
- **Forms.** New src/components/WhitepaperRequest with FORM_ACTION and a mailto fallback, as in section 6. Retire EmailCapture from /contact and the article end block; the end block links to the door instead.
- **Client-name check.** New scripts/client-check.mjs, run as prebuild in package.json: fails the build if any string from a short list kept outside the repository (the client's company name, product name, city and contact names, supplied by Adheip as an environment variable or a gitignored file) appears under src/, blog/, static/ or lead-magnets/. A small Node script with no dependencies, like the other scripts in scripts/. With the variable unset the check prints a warning and passes, so a local build never needs the list.
- **SEO script.** In scripts/seo-check.sh replace the /services/gpu-networking check with /networking, add the two solutions URLs and /open-source, and add one 301 check per retired URL.
- **Blog tags.** Tag every existing post with networking or energy-sites. There is no tag allow-list in this Docusaurus version, and scripts/tag-check.mjs is an analytics check, not a tag check, so add scripts/blog-tags-check.mjs, run in prebuild, that fails when a post under blog/ carries neither tag. The posts under blog/networking, the GH200, GPU-to-GPU, network-bottleneck and KAI Scheduler posts, and the Helm operator post get networking. The GPU power management post and the control-plane and state-machine posts get energy-sites. The article end block links to the door the post's tag belongs to.
- **Order of work.** Redirects and the client check first, then /networking and the home page (door 1 pays today), then the solutions pages, then open source and about, then the removals.

## 8. Before it goes live

- No client named anywhere; the build check passes with the real list.
- Every retired URL returns 301 to its door; the seo-check script passes against the preview.
- Every contribution listed links to a merged change, and the wording is "we contribute to".
- No figure on the site that BaaZ cannot back with its own delivery.
- Search Console decisions recorded in section 3.
- The "Built in the open" sections stay out until the repository is public.
- The "still to decide" and "to confirm" points in 4.2 and 4.4 are settled before the copy they touch changes.
- Outreach sheet messaging updated to say the same two things as the site.
