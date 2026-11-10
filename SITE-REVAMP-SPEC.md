# baaz.dev revamp: structure and page copy

*Spec for the site rebuild. Seven pages plus the blog. Every page's copy is final draft and can be built as written. Repository notes for the coding agent are at the end.*

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

| Page       | URL                                         | Job                                                                                                          | Length        |
|----------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------|-------------------|
| Home           | /                                               | The line, two doors, proof strip, one call to action                                                             | about 180 words   |
| GPU networking | /networking                                     | Door 1: what we design, bring up and run, the three packages, the contributions, the RDMA write-up, fabric check | about 650 words   |
| Solutions      | /solutions                                      | Door 2 landing: what a solution includes, the energy-sites solution                                              | about 220 words   |
| Energy sites   | /solutions/distributed-gpu-compute-energy-sites | The solution page: problem, what we decide, how we solve it, what we measure, whitepaper request                 | about 1,100 words |
| Open source    | /open-source                                    | Proof page: the merged changes with links, the pilot when public                                                 | about 250 words   |
| About          | /about                                          | Who we are, the boundary, how we work with partners                                                              | about 150 words   |
| Contact        | /contact                                        | Unchanged, one line added                                                                                        |                   |
| Blog           | /blog                                           | Unchanged. Every post tagged networking or energy-sites. New posts only on those two topics.                     |                   |

**Navbar**, left to right: Networking · Solutions (dropdown: Distributed GPU compute at energy sites) · Open source · Blog · About · Talk to us (button, to /contact).

**Footer**, three columns: Networking (Fabric acceptance, Network Operator deployment and upgrades, Secondary networks, each an anchor on /networking) · Solutions (Distributed GPU compute at energy sites, Request the whitepaper) · Company (About, Open source, Blog, Contact). Below: "BaaZ · baaz.dev · © 2026 Sadhrao Software Consulting".

## 3. Retired pages and redirects

Thirteen pages become seven. Every retired URL returns a 301 to the page that now answers its query, so nothing indexed dies. Before the pages are removed, check Google Search Console for the last three months: any retired page with real clicks (not impressions) stays as a short page of about 150 words under its door, linking up to it, instead of a redirect. Record the decision per URL in this table before building.

| Retired URL                | 301 to                     | Search Console |
|--------------------------------|--------------------------------|--------------------|
| /services                      | /networking                    |                    |
| /services/ai-factory           | /networking#bring-up           |                    |
| /services/distributed-training | /networking#design             |                    |
| /services/gpu-networking       | /networking                    |                    |
| /services/gpu-kubernetes       | /networking#run                |                    |
| /services/gpu-monitoring       | /networking#run                |                    |
| /case-studies                  | /networking#rdma-on-kubernetes |                    |
| /case-studies/rdma-kubernetes  | /networking#rdma-on-kubernetes |                    |
| /audit                         | /networking#fabric-check       |                    |
| /partners                      | /about#partners                |                    |

The LLM inference service has no page of its own today (its navbar item points at /services) and gets no redirect. The GPU cloud control plane solution designed in October is not built in this release; its design stays in the canvas for when a buyer appears.

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

Title tag: GPU Networking on Kubernetes: RDMA Fabrics \| BaaZ  
Meta description: Fabric design, bring-up and acceptance for GPU clusters, and NVIDIA's networking stack on Kubernetes, by engineers who contribute to it.

**Breadcrumb:** Home › GPU networking

**H1:** GPU networking on Kubernetes

**Lead:** A GPU cluster is worth what its network lets it do. The fabric is the part of a cluster most often wrong on day one and hardest to prove right, and the software that runs it on Kubernetes is deep. We design it, bring it up and run it, and we contribute to the software we run.

**H2 (anchor: design):** What we design

The fabric topology for the traffic the cluster will carry: rail-optimized for training where that pays, simpler where it does not. Switch and NIC selection against the GPU and server you have chosen. The cabling plan. The management network, separate from the data fabric. The storage path, including NFS over RDMA where it fits. The output is a design your integrator can build from and we can accept against.

**H2 (anchor: bring-up):** What we bring up

Switch configuration for the fabric and the management network. Provisioning through the servers' management controllers, so the operating system, firmware and driver baselines are the same on every node. GPUDirect RDMA verified end to end, GPU to NIC to switch to GPU, before anything else is installed on top.

**H2 (anchor: run):** What we run

NVIDIA's Network Operator on Kubernetes, with the device plugins and the drivers it manages. Secondary networks for training and storage traffic (SR-IOV, IPoIB, Multus), isolated from the cluster network. The telemetry that shows the fabric is healthy, and the runbooks that let your team keep it that way.

**H2:** Three ways to work with us

**H3 (anchor: fabric-acceptance):** Fabric acceptance

Before you sign off on a new cluster, we test the RDMA fabric at wire rate with the standard tools, fix what fails, and hand over the report. For clusters delivered by an integrator or a reseller, this is the check that the thing you paid for is the thing you got.

**H3 (anchor: network-operator):** Network Operator deployment and upgrades

Install or upgrade the Operator and the pieces it manages on an existing cluster, without taking the cluster down. We know the code paths: we have contributed to them.

**H3 (anchor: secondary-networks):** Secondary networks for training and storage

RDMA, SR-IOV and IPoIB networks for training jobs and storage traffic on Kubernetes, kept apart from the cluster network, with the MTU, the IPAM and the restart behavior set so a configuration change does not take a job down.

**H2 (anchor: contributions):** We contribute to the software we run

Changes we contributed to NVIDIA's networking software in 2026, maintained in the Mellanox organization on GitHub. Each links to the merged change.

- network-operator: make NIC firmware storage access mode configurable (September 2026)
- network-operator: MTU support on the IPoIBNetwork resource (September 2026)
- ipoib-cni: MTU support (May 2026)
- doca-driver-build: install the NFS userspace tools on the host when NFS over RDMA is enabled (April 2026)
- network-operator: global configuration for the NicClusterPolicy (January 2026)
- network-operator: restart RDMA, SR-IOV and Multus pods automatically on configuration changes (January 2026)

Also: a queue validator contributed to the KAI Scheduler, written up on the blog. Link: Open source, for the full list.

**H2 (anchor: rdma-on-kubernetes):** RDMA on bare-metal Kubernetes

Keep the body of the existing case study, without any figures, as this section. Same text, same diagrams, new place. Nothing is added.

**H2:** Reading

Three existing posts, linked by title: ECMP Hash Collisions in a Fat-Tree; Understanding Secondary Networks for GPU Workloads in Kubernetes; How to Calculate if Your Network is Bottlenecking Distributed Training.

**H2 (anchor: fabric-check):** Fabric check

Planning a cluster, or inheriting one? Send us the topology and the switch and NIC models, and we will tell you what to test first and what usually fails. No charge for the first look. Button: Send the topology (/contact)

This replaces the audit page. The pre-flight checklist and the fallback test in lead-magnets/ are delivered by email from this section once the form backend exists; until then the button goes to /contact.

### 4.3 Solutions (/solutions)

Title tag: Solutions \| BaaZ  
Meta description: GPU deployments for places that are not a data center: designed, piloted and run, starting with distributed GPU compute at energy sites.

**Eyebrow:** Solutions

**H1:** GPU infrastructure for places that are not a data center

**Lead:** Compute is moving to where the power, the customers or the hardware already are. Each such place needs the same software layer a data center gets, built for a site with no staff, no network you control and no way in from outside. We design that layer, build the first version in the open, and hand it over with the code.

**H2:** What a solution includes

- A deployment design: the hardware, what the site must provide, the fleet layout and the measures, as a document your own engineers and suppliers can act on. Fixed fee.
- A pilot that runs end to end before any hardware is bought.
- The few services nobody sells, written and documented.
- The measures that decide whether it pays, agreed up front and reported from the platform's own readings.

**H2:** Distributed GPU compute at energy sites

GPU pods at homes, batteries and solar sites, run as one fleet that follows the power. Link: Read the solution

**Call to action:** Planning something that does not fit a data center? Tell us about the sites, the hardware and what you need to sell, and we will tell you what the software has to do. Button: Talk to us

### 4.4 Distributed GPU compute at energy sites (/solutions/distributed-gpu-compute-energy-sites)

Title tag: Distributed GPU Compute at Energy Sites \| BaaZ  
Meta description: Software to run GPU pods at homes, batteries and solar sites: hardware and site design, zero-touch enrollment, fleet operations, a pod that follows the site's power. Whitepaper on request.

**Breadcrumb:** Home › Solutions › Distributed GPU compute at energy sites

**H1:** Distributed GPU compute at energy sites

**Lead:** GPU pods at homes, batteries and solar farms only work if the software treats each site as what it is: a small data center with no staff, no network you control, no way in from outside, and a power supply that changes hour by hour. We decide the hardware and what the site must provide, and we build that software: the pod's operating system and enrollment, the fleet management, the agent that follows the site's power, and the monitoring that shows whether the fleet is earning its keep.

Buttons: Request the whitepaper (anchor: whitepaper) · Talk to us about your fleet (/contact)

**H2:** The problem

Operators with sites and power are putting GPUs where the electricity already is: solar and battery retailers, virtual power plant operators, modular data center and edge compute companies, charging networks. The hardware and the energy side are well understood. Four things go wrong when the software is an afterthought.

**H3:** The empty disk  
A server at a home cannot be installed over the network, and its management controller cannot be reached from outside. A blank machine at a site is a dead end, and every method that works in a data center assumes a network you control.

**H3:** The dropped link  
Home internet drops constantly. A fleet built as one big cluster loses nodes all day, and one bad setting reaches every home at once. Many homes have no public address at all, so nothing outside can reach in to fix it.

**H3:** The ignored limit  
The battery is carrying the house, or the grid has set a limit. A pod that only listens to the cloud ignores that the moment the cloud is unreachable, and the house, the battery and the grid pay for it.

**H3:** The silent fleet  
Nothing in a garage announces that it has been idle for a week, throttled every evening, or waiting for a technician. Without the right readings the margin leaks, and nobody sees it until the quarter ends.

**H2:** What we decide before any hardware is bought

The design comes first, as a document the energy side and the hardware supplier can act on. It settles:

- **The pod.** GPU class and edition, the host around it, storage, enclosure and cooling, and the power it draws at full load and at its floor.
- **What the site must provide.** Its own circuit for the pod, a meter if the host is paid per kilowatt-hour, the router and the connection, and where the pod gets its power readings: from the inverter on the local network, or from the energy platform.
- **The fleet layout.** Regions, gateways, spares, and how a pod is replaced.
- **The measures.** The five below, with the targets written down before the first pod ships.

Fixed fee, scoped on the first call. It stands on its own if you build with someone else.

**H2:** How we solve it

Five principles, applied in four places. Everything above the hardware is open-source software, configured rather than written, except the few small services that do not exist anywhere else.

- **Nothing is installed at the site.** Pods are imaged, tested and enrolled at a depot or the factory, and ship ready to plug in. The installer connects power and network; the pod does the rest.
- **Every pod runs on its own.** Each is its own small cluster. A central manager publishes settings; the pod pulls them when it can and keeps working when it cannot. Changes roll out in stages and roll back by themselves.
- **The pod opens every connection; nothing connects in.** One tunnel for management, one path for customer traffic, so a customer surge cannot lock you out and a management outage cannot stop customers.
- **The pod follows the site's power.** Its agent reads the battery, the solar output and the house load on the local network and sets the GPU's power limit itself: full, reduced, paused, off. If the readings stop, it drops to a safe level on its own. It never commands the battery or the inverter.
- **Open source, configured, plus the services we write.** The code is yours, with documentation and handover.

**H3:** Where the software runs

- **Central.** Control plane, no GPUs: fleet manager, enrollment and identity, placement and inventory, monitoring. It publishes; pods pull.
- **Regional.** A gateway per region: public address, tunnel hub, routing to pods with power to spare, model cache, metering.
- **Site.** The pod: immutable operating system, Kubernetes, GPU runtime, model server, pod agent. Outbound connections only.
- **Depot.** Staging depot or factory: image, firmware settings, keys, burn-in. Ships ready to plug in.

**H3:** What we write ourselves

- **Pod agent.** Reads the site's power, sets the GPU's power limit, reports health and draw, drops to a safe level when the readings stop. Self-test on first boot.
- **Placement and inventory.** Every pod's state from staged to enrolled, serving, draining and retired, with its site, region and capacity.
- **Energy-aware routing.** The regional gateway sends each request to a healthy pod with power to spare, and meters usage per customer.
- **Energy platform integration.** Where an operator's platform can set a budget per site, the agent takes it as an input alongside the local readings.

Configured, not written: an immutable operating system with automatic rollback, single-node Kubernetes on each pod, open model serving, outbound-only encrypted tunnels, boot attestation and workload identity, metrics and alerting.

**H2:** What we measure

A pod's margin depends on five things, and four of them are set by how the software is built: sellable hours, utilization, operations cost and site visits. Price is the fifth. These are the measures agreed during design and reported monthly, from the platform's own readings.

- **Fleet availability.** Pod-hours serving over pod-hours installed.
- **Remote recovery rate.** Incidents closed without a site visit.
- **Site visits per 100 pods.** Per month; the operations budget line.
- **Onboarding time.** Plug-in to first customer request served.
- **Time to safe cap.** Power-limit event to GPU cap applied.

**H2 (include only once the repository is public):** Built in the open

The reference implementation is being built as open source, starting with a site simulator that behaves like a real inverter and battery over the standard the industry uses, so the whole loop can be run and measured before a single pod exists. Link: the repository.

**H2 (anchor: whitepaper):** Whitepaper: Compute Where the Power Is

How to build and run distributed GPU compute at homes, batteries and solar sites, and how the way it is built decides whether it pays.

- What the public designs describe, and what they leave out
- The operating model: five principles, from the empty disk to the power limit
- How it is built: four phases and six proofs in a quarter
- The measures that decide the margin, and which build decision moves each one
- Risks and what the design does about them

Form fields: Name · Work email · Company · What are you building? (GPU pods at homes or small sites / Modular compute at renewable sites / Edge inference for an existing network / Evaluating the space). Line under the button: We email the PDF within one business day. BaaZ may follow up once about it; nothing else. Button: Email me the whitepaper.

**H2:** Planning a fleet?

Tell us about your sites, your hardware and what your energy platform can signal, and we will tell you what the pod software would need to do. Buttons: Talk to us (/contact) · Request the whitepaper (anchor)

### 4.5 Open source (/open-source)

Title tag: Open Source \| BaaZ  
Meta description: The open-source software BaaZ contributes to and runs for customers: NVIDIA's networking stack on Kubernetes, the KAI Scheduler, and our own work.

**H1:** Open source

**Lead:** We run this software for customers, and we contribute to it. Everything below links to the merged change or the repository.

**H2:** NVIDIA networking on Kubernetes

Maintained in the Mellanox organization on GitHub. Changes contributed in 2026:

- network-operator \#3266: make NIC firmware storage access mode configurable. September 2026.
- network-operator \#3147: MTU support on the IPoIBNetwork resource. September 2026.
- ipoib-cni \#132: MTU support. May 2026.
- doca-driver-build \#299: install the NFS userspace tools on the host when NFS over RDMA is enabled. April 2026.
- network-operator \#2070: global configuration for the NicClusterPolicy. January 2026.
- network-operator \#2035: restart RDMA, SR-IOV and Multus pods automatically on configuration changes. January 2026.

Each item links to github.com/Mellanox/\<repo\>/pull/\<number\>.

**H2:** KAI Scheduler

A queue validator for the KAI Scheduler, the GPU scheduler we run for multi-team clusters. Link: the blog post.

**H2 (include only once the repository is public):** Our own work

The reference implementation for distributed GPU compute at energy sites, built in the open. Link: the repository. One sentence on what it contains at the time of publishing.

Nothing else on the page. No Apache or database work: it is not one of the two things.

### 4.6 About (/about)

Title tag: About \| BaaZ  
Meta description: BaaZ is a founder-led GPU infrastructure boutique. The engineer you talk to on the first call is the engineer doing the work.

**H1:** About BaaZ

BaaZ is a founder-led GPU infrastructure boutique. The engineer you talk to on the first call is the engineer doing the work. We have run these systems in production and we contribute to the software we run.

We do not build data centers, assemble racks or sell hardware. We decide what goes where and make it run, and we hand it over: your team operates it afterwards, with runbooks and the code.

**H2 (anchor: partners):** Working with partners

Integrators, resellers and GPU cloud providers bring us in for the layer between the hardware and the workloads, under their name or ours. Same engineers, same handover.

One line at the end: The founder is a member of the Apache Software Foundation. Nothing else about databases.

Button: Schedule a call (/contact)

### 4.7 Contact (/contact)

Unchanged, with one line added above the form: "Tell us which it is: a cluster's network, or compute at sites. One line about the deployment is enough." The email-capture block on this page is removed; the two lead magnets are offered from /networking instead.

## 5. SEO notes

- Canonical on every page is its own URL. Sitemap is automatic; confirm the seven URLs are in it and the retired ones are not.
- Structured data through the Head component: Organization on the home page; Service on /networking and on the energy-sites page (name = H1, provider = BaaZ, areaServed = Worldwide); BreadcrumbList on every inner page.
- Open Graph image per page: the home image stays; /networking gets a 1200 × 630 crop of the fabric diagram from the RDMA write-up; the energy-sites page gets the "where the software runs" diagram with the H1 over it.
- Primary terms, in H1, title and first paragraph only: GPU networking on Kubernetes, RDMA fabric, NVIDIA Network Operator; distributed GPU compute, energy sites, GPU fleet management, edge inference. Secondary terms stay in body copy where they read naturally. No term is repeated for its own sake.
- Internal links: home to both doors and to /open-source; /networking to /open-source and the three posts; the energy-sites page to /solutions and /contact; every blog post's end block links to the door its tag belongs to, not to the retired audit page.

## 6. The whitepaper and fabric-check forms

The PDF is never hosted publicly. The form posts to a form backend; the request arrives by email; the PDF is sent by hand from adheip@baaz.dev within one business day. Start with Formspree (free tier is enough): set the endpoint in one place, a new WhitepaperRequest component, and until the endpoint exists render a mailto link to adheip@baaz.dev with the subject prefilled instead of a dead form. Log every request in the outreach sheet: name, company, email, what they are building, date sent. One follow-up after seven days, offering a design review. Nothing after that. The fabric-check section on /networking uses the same component with its own subject and no "what are you building" field.

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
- Outreach sheet messaging updated to say the same two things as the site.
