// Inline SVG diagrams from the design canvas, desktop and phone layouts.
// Rendered as markup so their text uses the site's fonts. Accent #1959FF.
// Generated from the canvas frames; edit the drawing there and regenerate.

export const NETWORKING_DESKTOP = `<svg viewBox="0 0 1136 528" role="img" aria-label="Two GPU nodes in one Kubernetes cluster. Requests from users and sessions from developers come in through a gateway onto the pod network, the overlay, and reach a model server and a notebook. Each training pod has a second interface that goes through the node's network card to the switch fabric, the underlay, where training traffic runs as RDMA from leaf to spine to leaf. The numbers mark training, inference and developer traffic." style="width: 100%; height: auto; display: block">
<defs>
<pattern id="nf-dots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="8" cy="8" r="1" fill="#0E1420" fill-opacity="0.12"></circle></pattern>
</defs>
<rect x="0.75" y="0.75" width="1134.5" height="526.5" rx="16" fill="#ffffff" stroke="#0E1420" stroke-width="1.5" stroke-opacity="0.12"></rect>
<rect x="1" y="1" width="1134" height="526" rx="16" fill="url(#nf-dots)"></rect>
<rect x="168" y="44" width="176" height="40" rx="20" fill="#ffffff" stroke="#0E1420" stroke-width="1.5" stroke-opacity="0.22"></rect><text x="256" y="67.6" font-size="10" letter-spacing="1.4" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">USERS AND APPS</text>
<rect x="792" y="44" width="176" height="40" rx="20" fill="#ffffff" stroke="#0E1420" stroke-width="1.5" stroke-opacity="0.22"></rect><text x="880" y="67.6" font-size="10" letter-spacing="1.4" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">DEVELOPERS</text>
<path d="M344 64 H472" fill="none" stroke="#0E1420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M480 64 L472 59 L472 69 Z" fill="#0E1420"></path><path d="M792 64 H664" fill="none" stroke="#0E1420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M656 64 L664 59 L664 69 Z" fill="#0E1420"></path>
<text x="412" y="44" font-size="10" letter-spacing="1.4" fill="#4B5563" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">REQUESTS</text><text x="724" y="44" font-size="10" letter-spacing="1.4" fill="#4B5563" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">SESSIONS</text>
<path d="M568 84 V148" fill="none" stroke="#0E1420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<rect x="480" y="44" width="176" height="40" rx="10" fill="#ffffff" stroke="#0E1420" stroke-width="1.2"></rect><text x="568" y="67.6" font-size="10" letter-spacing="1.4" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">GATEWAY</text>
<rect x="40" y="108" width="1056" height="292" rx="16" fill="#ffffff" fill-opacity="0.72" stroke="#0E1420" stroke-width="1.5" stroke-opacity="0.32" stroke-dasharray="6 6"></rect>
<text x="64" y="133" font-size="10" letter-spacing="1.4" fill="#667085" style="font-family: 'Geist Mono', ui-monospace, monospace">KUBERNETES CLUSTER</text>
<path d="M568 84 V148" fill="none" stroke="#0E1420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<rect x="72" y="216" width="476" height="168" rx="14" fill="#ffffff" stroke="#0E1420" stroke-width="1.5" stroke-opacity="0.22"></rect><text x="96" y="243" font-size="10" letter-spacing="1.4" fill="#667085" style="font-family: 'Geist Mono', ui-monospace, monospace">GPU NODE</text>
<rect x="588" y="216" width="476" height="168" rx="14" fill="#ffffff" stroke="#0E1420" stroke-width="1.5" stroke-opacity="0.22"></rect><text x="612" y="243" font-size="10" letter-spacing="1.4" fill="#667085" style="font-family: 'Geist Mono', ui-monospace, monospace">GPU NODE</text>
<path d="M191 192 V258" fill="none" stroke="#0E1420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M429 192 V258" fill="none" stroke="#0E1420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="438" y="232" font-size="10" fill="#4B5563" style="font-family: 'Geist Mono', ui-monospace, monospace">eth0</text>
<path d="M707 192 V258" fill="none" stroke="#0E1420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="716" y="232" font-size="10" fill="#4B5563" style="font-family: 'Geist Mono', ui-monospace, monospace">eth0</text>
<path d="M945 192 V258" fill="none" stroke="#0E1420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M429 306 V334 M429 370 V448" fill="none" stroke="#1959FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="439" y="324" font-size="10" fill="#1959FF" style="font-family: 'Geist Mono', ui-monospace, monospace">net1</text>
<path d="M707 306 V334 M707 370 V448" fill="none" stroke="#1959FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="717" y="324" font-size="10" fill="#1959FF" style="font-family: 'Geist Mono', ui-monospace, monospace">net1</text>
<path d="M473 464 H524 M612 464 H663" fill="none" stroke="#1959FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
<rect x="72" y="148" width="992" height="44" rx="12" fill="#F5F7FA" stroke="#0E1420" stroke-width="1.5" stroke-opacity="0.36" stroke-dasharray="6 6"></rect>
<text x="96" y="173.6" font-size="10" letter-spacing="1.4" fill="#4B5563" style="font-family: 'Geist Mono', ui-monospace, monospace">POD NETWORK · OVERLAY</text>
<rect x="96" y="258" width="190" height="48" rx="9" fill="#ffffff" stroke="#0E1420" stroke-width="1.2"></rect><text x="191" y="285.6" font-size="10" letter-spacing="1.4" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">MODEL SERVER</text>
<rect x="334" y="258" width="190" height="48" rx="9" fill="#EEF3FF" stroke="#1959FF" stroke-width="1.5"></rect><text x="429" y="285.6" font-size="10" letter-spacing="1.4" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">TRAINING POD</text>
<rect x="612" y="258" width="190" height="48" rx="9" fill="#EEF3FF" stroke="#1959FF" stroke-width="1.5"></rect><text x="707" y="285.6" font-size="10" letter-spacing="1.4" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">TRAINING POD</text>
<rect x="850" y="258" width="190" height="48" rx="9" fill="#ffffff" stroke="#0E1420" stroke-width="1.2"></rect><text x="945" y="285.6" font-size="10" letter-spacing="1.4" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">NOTEBOOK</text>
<rect x="377" y="334" width="104" height="36" rx="8" fill="#ffffff" stroke="#0E1420" stroke-width="1.2"></rect><rect x="387" y="347.6" width="11" height="8.8" rx="2" fill="#EEF3FF" stroke="#0E1420" stroke-width="1.1"></rect><rect x="402" y="347.6" width="11" height="8.8" rx="2" fill="#EEF3FF" stroke="#0E1420" stroke-width="1.1"></rect><text x="471" y="355.6" font-size="10" letter-spacing="1.4" fill="#0E1420" text-anchor="end" style="font-family: 'Geist Mono', ui-monospace, monospace">NIC</text>
<rect x="655" y="334" width="104" height="36" rx="8" fill="#ffffff" stroke="#0E1420" stroke-width="1.2"></rect><rect x="665" y="347.6" width="11" height="8.8" rx="2" fill="#EEF3FF" stroke="#0E1420" stroke-width="1.1"></rect><rect x="680" y="347.6" width="11" height="8.8" rx="2" fill="#EEF3FF" stroke="#0E1420" stroke-width="1.1"></rect><text x="749" y="355.6" font-size="10" letter-spacing="1.4" fill="#0E1420" text-anchor="end" style="font-family: 'Geist Mono', ui-monospace, monospace">NIC</text>
<rect x="72" y="432" width="992" height="64" rx="12" fill="#0E1420"></rect>
<text x="96" y="468" font-size="11" letter-spacing="1.6" fill="#ffffff" style="font-family: 'Geist Mono', ui-monospace, monospace">SWITCH FABRIC · UNDERLAY</text>
<text x="1040" y="468" font-size="10" letter-spacing="1.4" fill="#ffffff" fill-opacity="0.66" text-anchor="end" style="font-family: 'Geist Mono', ui-monospace, monospace">INFINIBAND OR ROCE</text>
<rect x="385" y="448" width="88" height="32" rx="7" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.42"></rect><text x="429" y="467.6" font-size="10" letter-spacing="1.4" fill="#ffffff" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">LEAF</text><rect x="524" y="448" width="88" height="32" rx="7" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.42"></rect><text x="568" y="467.6" font-size="10" letter-spacing="1.4" fill="#ffffff" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">SPINE</text><rect x="663" y="448" width="88" height="32" rx="7" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.42"></rect><text x="707" y="467.6" font-size="10" letter-spacing="1.4" fill="#ffffff" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">LEAF</text>
<path d="M429 432 V448 M707 432 V448 M473 464 H524 M612 464 H663" fill="none" stroke="#1959FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
<circle cx="191" cy="192" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="191" cy="258" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="429" cy="192" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="429" cy="258" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="707" cy="192" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="707" cy="258" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="945" cy="192" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="945" cy="258" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="568" cy="148" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle>
<circle cx="429" cy="306" r="3.5" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="429" cy="334" r="3.5" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="429" cy="370" r="3.5" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="429" cy="448" r="3.5" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="707" cy="306" r="3.5" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="707" cy="334" r="3.5" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="707" cy="370" r="3.5" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="707" cy="448" r="3.5" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="473" cy="464" r="3.5" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="524" cy="464" r="3.5" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="612" cy="464" r="3.5" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="663" cy="464" r="3.5" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle>
<text x="447" y="420" font-size="10" letter-spacing="1.4" fill="#1959FF" style="font-family: 'Geist Mono', ui-monospace, monospace">RDMA</text>
<circle cx="429" cy="416" r="11" fill="#1959FF" stroke="#ffffff" stroke-width="2"></circle><text x="429" y="420.32" font-size="12" font-weight="600" fill="#ffffff" text-anchor="middle" style="font-family: Geist, Inter, system-ui, sans-serif">1</text><circle cx="412" cy="64" r="11" fill="#1959FF" stroke="#ffffff" stroke-width="2"></circle><text x="412" y="68.32" font-size="12" font-weight="600" fill="#ffffff" text-anchor="middle" style="font-family: Geist, Inter, system-ui, sans-serif">2</text><circle cx="724" cy="64" r="11" fill="#1959FF" stroke="#ffffff" stroke-width="2"></circle><text x="724" y="68.32" font-size="12" font-weight="600" fill="#ffffff" text-anchor="middle" style="font-family: Geist, Inter, system-ui, sans-serif">3</text>
</svg>`

export const NETWORKING_MOBILE = `<svg viewBox="0 0 350 468" role="img" aria-label="Two GPU nodes in one Kubernetes cluster. Requests from users and sessions from developers come in through a gateway onto the pod network, the overlay, and reach a model server and a notebook. Each training pod has a second interface that goes through the node's network card to the switch fabric, the underlay, where training traffic runs as RDMA from leaf to spine to leaf. The numbers mark training, inference and developer traffic." style="width: 100%; height: auto; display: block">
<defs>
<pattern id="nfm-dots-m" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="8" cy="8" r="1" fill="#0E1420" fill-opacity="0.12"></circle></pattern>
</defs>
<rect x="0.75" y="0.75" width="348.5" height="466.5" rx="16" fill="#ffffff" stroke="#0E1420" stroke-width="1.5" stroke-opacity="0.12"></rect>
<rect x="1" y="1" width="348" height="466" rx="16" fill="url(#nfm-dots-m)"></rect>
<rect x="14" y="18" width="156" height="36" rx="18" fill="#ffffff" stroke="#0E1420" stroke-width="1.5" stroke-opacity="0.22"></rect><text x="92" y="39.6" font-size="10" letter-spacing="1.2" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">USERS AND APPS</text>
<rect x="180" y="18" width="156" height="36" rx="18" fill="#ffffff" stroke="#0E1420" stroke-width="1.5" stroke-opacity="0.22"></rect><text x="258" y="39.6" font-size="10" letter-spacing="1.2" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">DEVELOPERS</text>
<path d="M92 54 V90 M258 54 V90" fill="none" stroke="#0E1420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M92 98 L87 90 L97 90 Z" fill="#0E1420"></path><path d="M258 98 L253 90 L263 90 Z" fill="#0E1420"></path>
<text x="109" y="79.6" font-size="10" letter-spacing="1.2" fill="#4B5563" style="font-family: 'Geist Mono', ui-monospace, monospace">REQUESTS</text><text x="275" y="79.6" font-size="10" letter-spacing="1.2" fill="#4B5563" style="font-family: 'Geist Mono', ui-monospace, monospace">SESSIONS</text>
<rect x="14" y="98" width="322" height="34" rx="10" fill="#ffffff" stroke="#0E1420" stroke-width="1.2"></rect><text x="175" y="118.6" font-size="10" letter-spacing="1.2" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">GATEWAY</text>
<rect x="8" y="148" width="262" height="306" rx="14" fill="#ffffff" fill-opacity="0.72" stroke="#0E1420" stroke-width="1.5" stroke-opacity="0.32" stroke-dasharray="6 6"></rect>
<text x="60" y="167" font-size="10" letter-spacing="1.2" fill="#667085" style="font-family: 'Geist Mono', ui-monospace, monospace">KUBERNETES CLUSTER</text>
<path d="M33 132 V176" fill="none" stroke="#0E1420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<rect x="58" y="176" width="202" height="128" rx="12" fill="#ffffff" stroke="#0E1420" stroke-width="1.5" stroke-opacity="0.22"></rect><text x="70" y="196" font-size="10" letter-spacing="1.2" fill="#667085" style="font-family: 'Geist Mono', ui-monospace, monospace">GPU NODE</text>
<rect x="58" y="316" width="202" height="128" rx="12" fill="#ffffff" stroke="#0E1420" stroke-width="1.5" stroke-opacity="0.22"></rect><text x="70" y="336" font-size="10" letter-spacing="1.2" fill="#667085" style="font-family: 'Geist Mono', ui-monospace, monospace">GPU NODE</text>
<path d="M48 223 H92" fill="none" stroke="#0E1420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M48 271 H92" fill="none" stroke="#0E1420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="75" y="265" font-size="10" fill="#4B5563" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">eth0</text>
<path d="M184 271 H214 M252 271 H286" fill="none" stroke="#1959FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="199" y="264" font-size="10" fill="#1959FF" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">net1</text>
<path d="M48 363 H92" fill="none" stroke="#0E1420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="75" y="357" font-size="10" fill="#4B5563" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">eth0</text>
<path d="M184 363 H214 M252 363 H286" fill="none" stroke="#1959FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="199" y="356" font-size="10" fill="#1959FF" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">net1</text>
<path d="M48 411 H92" fill="none" stroke="#0E1420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<rect x="18" y="176" width="30" height="268" rx="10" fill="#F5F7FA" stroke="#0E1420" stroke-width="1.5" stroke-opacity="0.36" stroke-dasharray="6 6"></rect>
<text x="36.6" y="310" font-size="10" letter-spacing="1.2" fill="#4B5563" text-anchor="middle" transform="rotate(-90 36.6 310)" style="font-family: 'Geist Mono', ui-monospace, monospace">POD NETWORK · OVERLAY</text>
<rect x="92" y="206" width="92" height="34" rx="9" fill="#ffffff" stroke="#0E1420" stroke-width="1.2"></rect><text x="138" y="226.6" font-size="10" letter-spacing="0.6" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">MODEL SERVER</text>
<rect x="92" y="254" width="92" height="34" rx="9" fill="#EEF3FF" stroke="#1959FF" stroke-width="1.5"></rect><text x="138" y="274.6" font-size="10" letter-spacing="0.6" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">TRAINING POD</text>
<rect x="214" y="257" width="38" height="28" rx="7" fill="#ffffff" stroke="#0E1420" stroke-width="1.2"></rect><text x="233" y="274.6" font-size="10" letter-spacing="0.8" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">NIC</text>
<rect x="92" y="346" width="92" height="34" rx="9" fill="#EEF3FF" stroke="#1959FF" stroke-width="1.5"></rect><text x="138" y="366.6" font-size="10" letter-spacing="0.6" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">TRAINING POD</text>
<rect x="214" y="349" width="38" height="28" rx="7" fill="#ffffff" stroke="#0E1420" stroke-width="1.2"></rect><text x="233" y="366.6" font-size="10" letter-spacing="0.8" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">NIC</text>
<rect x="92" y="394" width="92" height="34" rx="9" fill="#ffffff" stroke="#0E1420" stroke-width="1.2"></rect><text x="138" y="414.6" font-size="10" letter-spacing="0.6" fill="#0E1420" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">NOTEBOOK</text>
<rect x="280" y="176" width="60" height="268" rx="10" fill="#0E1420"></rect>
<text x="313.6" y="222" font-size="10" letter-spacing="1.2" fill="#ffffff" text-anchor="middle" transform="rotate(-90 313.6 222)" style="font-family: 'Geist Mono', ui-monospace, monospace">UNDERLAY</text>
<text x="313.6" y="410" font-size="10" letter-spacing="1.2" fill="#ffffff" fill-opacity="0.66" text-anchor="middle" transform="rotate(-90 313.6 410)" style="font-family: 'Geist Mono', ui-monospace, monospace">SWITCHES</text>
<rect x="286" y="257" width="48" height="28" rx="7" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.42"></rect><text x="310" y="274.6" font-size="10" letter-spacing="1.4" fill="#ffffff" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">LEAF</text><rect x="286" y="303" width="48" height="28" rx="7" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.42"></rect><text x="310" y="320.6" font-size="10" letter-spacing="1.4" fill="#ffffff" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">SPINE</text><rect x="286" y="349" width="48" height="28" rx="7" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.42"></rect><text x="310" y="366.6" font-size="10" letter-spacing="1.4" fill="#ffffff" text-anchor="middle" style="font-family: 'Geist Mono', ui-monospace, monospace">LEAF</text>
<path d="M310 285 V303 M310 331 V349" fill="none" stroke="#1959FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
<circle cx="33" cy="176" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="48" cy="223" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="92" cy="223" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="48" cy="271" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="92" cy="271" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="48" cy="363" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="92" cy="363" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="48" cy="411" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle><circle cx="92" cy="411" r="3" fill="#ffffff" stroke="#0E1420" stroke-width="1.5"></circle>
<circle cx="184" cy="271" r="3.2" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="214" cy="271" r="3.2" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="252" cy="271" r="3.2" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="286" cy="271" r="3.2" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="184" cy="363" r="3.2" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="214" cy="363" r="3.2" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="252" cy="363" r="3.2" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="286" cy="363" r="3.2" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="310" cy="285" r="3.2" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="310" cy="303" r="3.2" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="310" cy="331" r="3.2" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle><circle cx="310" cy="349" r="3.2" fill="#ffffff" stroke="#1959FF" stroke-width="1.5"></circle>
<circle cx="269" cy="271" r="10" fill="#1959FF" stroke="#ffffff" stroke-width="2"></circle><text x="269" y="274.96" font-size="11" font-weight="600" fill="#ffffff" text-anchor="middle" style="font-family: Geist, Inter, system-ui, sans-serif">1</text><circle cx="92" cy="76" r="10" fill="#1959FF" stroke="#ffffff" stroke-width="2"></circle><text x="92" y="79.96" font-size="11" font-weight="600" fill="#ffffff" text-anchor="middle" style="font-family: Geist, Inter, system-ui, sans-serif">2</text><circle cx="258" cy="76" r="10" fill="#1959FF" stroke="#ffffff" stroke-width="2"></circle><text x="258" y="79.96" font-size="11" font-weight="600" fill="#ffffff" text-anchor="middle" style="font-family: Geist, Inter, system-ui, sans-serif">3</text>
</svg>`

export const ENERGY_DESKTOP = `<svg viewBox="0 0 1136 344" role="img" aria-label="At each site, your energy system powers a GPU pod. The pods run as one fleet, and your customers buy the compute." style="width: 100%; height: auto; display: block">
<defs>
<pattern id="fd-dots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="8" cy="8" r="1" fill="#0E1420" fill-opacity="0.12"></circle></pattern>
<marker id="fd-amber" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="8" markerHeight="8" orient="auto"><path d="M1 1 L7 4 L1 7" fill="none" stroke="#F59E0B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></marker>
<marker id="fd-blue" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="8" markerHeight="8" orient="auto"><path d="M1 1 L7 4 L1 7" fill="none" stroke="#1959FF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></marker>
</defs>
<rect x="0.75" y="0.75" width="1134.5" height="342.5" rx="16" fill="#ffffff" stroke="#0E1420" stroke-opacity="0.12" stroke-width="1.5"></rect>
<rect x="1" y="1" width="1134" height="342" rx="16" fill="url(#fd-dots)"></rect>
<rect x="72" y="40" width="444" height="208" rx="14" fill="#ffffff" stroke="#0E1420" stroke-opacity="0.10" stroke-width="1.5"></rect>
<rect x="60" y="52" width="444" height="208" rx="14" fill="#ffffff" stroke="#0E1420" stroke-opacity="0.14" stroke-width="1.5"></rect>
<rect x="48" y="64" width="444" height="208" rx="14" fill="#ffffff" stroke="#0E1420" stroke-opacity="0.22" stroke-width="1.5"></rect>
<text x="68" y="87" font-size="10" letter-spacing="1.4" fill="#667085" style="font-family: 'Geist Mono', ui-monospace, monospace">AT EACH SITE</text>
<rect x="100" y="119" width="100" height="100" rx="10" fill="#FFF7E6" stroke="#F59E0B" stroke-width="1.5"></rect>
<g transform="translate(131.6 149.8) scale(1.6)"><path d="M13 2L4 14h7l-1 8 9-12h-7z" fill="#F59E0B" fill-opacity="0.25" stroke="#0E1420" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="150" y="241" text-anchor="middle" font-size="10" letter-spacing="1.4" fill="#667085" style="font-family: 'Geist Mono', ui-monospace, monospace">YOUR ENERGY SYSTEM</text>
<path d="M200 169 H393" fill="none" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round" marker-end="url(#fd-amber)"></path>
<text x="297" y="160" text-anchor="middle" font-size="10" letter-spacing="1.4" fill="#667085" style="font-family: 'Geist Mono', ui-monospace, monospace">POWER</text>
<rect x="396" y="119" width="72" height="100" rx="10" fill="#EEF3FF" stroke="#1959FF" stroke-width="1.5"></rect>
<rect x="405" y="130" width="54" height="28" rx="4" fill="#ffffff" stroke="#0E1420" stroke-width="1.2"></rect>
<g fill="none" stroke="#0E1420" stroke-width="1.2"><circle cx="420" cy="144" r="8"></circle><circle cx="444" cy="144" r="8"></circle></g>
<g fill="#0E1420"><circle cx="420" cy="144" r="2"></circle><circle cx="444" cy="144" r="2"></circle></g>
<g fill="#1959FF"><rect x="414" y="195" width="8" height="12" rx="1.5"></rect><rect x="428" y="187" width="8" height="20" rx="1.5"></rect><rect x="442" y="179" width="8" height="28" rx="1.5" fill-opacity="0.25"></rect></g>
<circle cx="405.5" cy="209" r="2.4" fill="#34D399"></circle>
<text x="432" y="241" text-anchor="middle" font-size="10" letter-spacing="1.4" fill="#667085" style="font-family: 'Geist Mono', ui-monospace, monospace">GPU POD</text>
<g fill="none" stroke="#1959FF" stroke-width="1.5" stroke-dasharray="3 5" stroke-opacity="0.55"><path d="M504 153 H612"></path><path d="M516 137 H612"></path></g>
<path d="M468 169 H612" fill="none" stroke="#1959FF" stroke-width="1.5"></path>
<g fill="#ffffff" stroke="#1959FF" stroke-width="1.5"><circle cx="468" cy="169" r="3"></circle><circle cx="504" cy="153" r="3" stroke-opacity="0.55"></circle><circle cx="516" cy="137" r="3" stroke-opacity="0.55"></circle></g>
<rect x="612" y="89" width="200" height="160" rx="14" fill="#0E1420"></rect>
<g fill="#ffffff"><circle cx="634" cy="113" r="3.4"></circle><circle cx="648" cy="105" r="3.4"></circle><circle cx="648" cy="121" r="3.4"></circle></g>
<path d="M637 111.3 l8 -4.6 M637 114.7 l8 4.6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
<text x="664" y="117" font-size="11" letter-spacing="1.6" fill="#ffffff" style="font-family: 'Geist Mono', ui-monospace, monospace">ONE FLEET</text>
<path d="M628 136 H796" stroke="#ffffff" stroke-opacity="0.14" stroke-width="1"></path>
<g fill="#34D399"><circle cx="634" cy="160" r="3"></circle><circle cx="634" cy="188" r="3"></circle><circle cx="634" cy="216" r="3"></circle></g>
<g fill="#ffffff" fill-opacity="0.14"><rect x="648" y="156" width="148" height="8" rx="4"></rect><rect x="648" y="184" width="148" height="8" rx="4"></rect><rect x="648" y="212" width="148" height="8" rx="4"></rect></g>
<g fill="#1959FF"><rect x="648" y="156" width="104" height="8" rx="4"></rect><rect x="648" y="184" width="58" height="8" rx="4"></rect><rect x="648" y="212" width="148" height="8" rx="4"></rect></g>
<g fill="#ffffff" stroke="#1959FF" stroke-width="1.5"><circle cx="612" cy="169" r="3"></circle><circle cx="612" cy="153" r="3"></circle><circle cx="612" cy="137" r="3"></circle></g>
<path d="M812 169 H900" fill="none" stroke="#1959FF" stroke-width="1.5" marker-end="url(#fd-blue)"></path>
<rect x="904" y="89" width="184" height="160" rx="14" fill="#ffffff" stroke="#0E1420" stroke-opacity="0.22" stroke-width="1.5"></rect>
<rect x="972" y="111" width="48" height="48" rx="12" fill="#EEF3FF"></rect>
<path d="M996 121 L999.6 131.4 L1010 135 L999.6 138.6 L996 149 L992.4 138.6 L982 135 L992.4 131.4 Z" fill="#1959FF"></path>
<text x="996" y="185" text-anchor="middle" font-size="10" letter-spacing="1.4" fill="#0E1420" style="font-family: 'Geist Mono', ui-monospace, monospace">AI WORKLOADS</text>
<g fill="#0E1420" fill-opacity="0.10"><rect x="944" y="202" width="104" height="6" rx="3"></rect><rect x="962" y="216" width="68" height="6" rx="3"></rect></g>
<g font-size="15" font-weight="600" fill="#0E1420" text-anchor="middle" style="font-family: Geist, Inter, system-ui, sans-serif"><text x="270" y="313">Power you already have</text><text x="712" y="313">One fleet, run by your team</text><text x="996" y="313">Compute your customers buy</text></g>
</svg>`

export const ENERGY_MOBILE = `<svg viewBox="0 0 350 608" role="img" aria-label="At each site, your energy system powers a GPU pod. The pods run as one fleet, and your customers buy the compute." style="width: 100%; height: auto; display: block">
<defs>
<pattern id="fm-dots-m" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="8" cy="8" r="1" fill="#0E1420" fill-opacity="0.12"></circle></pattern>
<marker id="fm-amber-m" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="8" markerHeight="8" orient="auto"><path d="M1 1 L7 4 L1 7" fill="none" stroke="#F59E0B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></marker>
<marker id="fm-blue-m" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="8" markerHeight="8" orient="auto"><path d="M1 1 L7 4 L1 7" fill="none" stroke="#1959FF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></marker>
</defs>
<rect x="0.75" y="0.75" width="348.5" height="606.5" rx="16" fill="#ffffff" stroke="#0E1420" stroke-opacity="0.12" stroke-width="1.5"></rect>
<rect x="1" y="1" width="348" height="606" rx="16" fill="url(#fm-dots-m)"></rect>
<rect x="28" y="16" width="306" height="172" rx="14" fill="#ffffff" stroke="#0E1420" stroke-opacity="0.10" stroke-width="1.5"></rect>
<rect x="22" y="22" width="306" height="172" rx="14" fill="#ffffff" stroke="#0E1420" stroke-opacity="0.14" stroke-width="1.5"></rect>
<rect x="16" y="28" width="306" height="172" rx="14" fill="#ffffff" stroke="#0E1420" stroke-opacity="0.22" stroke-width="1.5"></rect>
<text x="32" y="51" font-size="11" letter-spacing="1.4" fill="#667085" style="font-family: 'Geist Mono', ui-monospace, monospace">AT EACH SITE</text>
<rect x="52" y="70" width="92" height="88" rx="10" fill="#FFF7E6" stroke="#F59E0B" stroke-width="1.5"></rect>
<g transform="translate(79.6 94.8) scale(1.6)"><path d="M13 2L4 14h7l-1 8 9-12h-7z" fill="#F59E0B" fill-opacity="0.25" stroke="#0E1420" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="98" y="180" text-anchor="middle" font-size="10" letter-spacing="1.2" fill="#667085" style="font-family: 'Geist Mono', ui-monospace, monospace">YOUR ENERGY SYSTEM</text>
<path d="M144 114 H203" fill="none" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round" marker-end="url(#fm-amber-m)"></path>
<text x="174" y="105" text-anchor="middle" font-size="10" letter-spacing="1.2" fill="#667085" style="font-family: 'Geist Mono', ui-monospace, monospace">POWER</text>
<rect x="206" y="70" width="72" height="88" rx="10" fill="#EEF3FF" stroke="#1959FF" stroke-width="1.5"></rect>
<rect x="215" y="80" width="54" height="26" rx="4" fill="#ffffff" stroke="#0E1420" stroke-width="1.2"></rect>
<g fill="none" stroke="#0E1420" stroke-width="1.2"><circle cx="230" cy="93" r="7.5"></circle><circle cx="254" cy="93" r="7.5"></circle></g>
<g fill="#0E1420"><circle cx="230" cy="93" r="2"></circle><circle cx="254" cy="93" r="2"></circle></g>
<g fill="#1959FF"><rect x="224" y="138" width="8" height="10" rx="1.5"></rect><rect x="238" y="132" width="8" height="16" rx="1.5"></rect><rect x="252" y="126" width="8" height="22" rx="1.5" fill-opacity="0.25"></rect></g>
<circle cx="215.5" cy="149" r="2.4" fill="#34D399"></circle>
<text x="242" y="180" text-anchor="middle" font-size="10" letter-spacing="1.2" fill="#667085" style="font-family: 'Geist Mono', ui-monospace, monospace">GPU POD</text>
<text x="175" y="231" text-anchor="middle" font-size="15" font-weight="600" fill="#0E1420" style="font-family: Geist, Inter, system-ui, sans-serif">Power you already have</text>
<path d="M175 245 V267" fill="none" stroke="#1959FF" stroke-width="1.5" stroke-linecap="round" marker-end="url(#fm-blue-m)"></path>
<rect x="59" y="274" width="232" height="120" rx="14" fill="#0E1420"></rect>
<g fill="#ffffff"><circle cx="81" cy="296" r="3.4"></circle><circle cx="95" cy="288" r="3.4"></circle><circle cx="95" cy="304" r="3.4"></circle></g>
<path d="M84 294.3 l8 -4.6 M84 297.7 l8 4.6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
<text x="111" y="300" font-size="11" letter-spacing="1.6" fill="#ffffff" style="font-family: 'Geist Mono', ui-monospace, monospace">ONE FLEET</text>
<path d="M75 316 H275" stroke="#ffffff" stroke-opacity="0.14" stroke-width="1"></path>
<g fill="#34D399"><circle cx="81" cy="336" r="3"></circle><circle cx="81" cy="358" r="3"></circle><circle cx="81" cy="380" r="3"></circle></g>
<g fill="#ffffff" fill-opacity="0.14"><rect x="95" y="332" width="180" height="8" rx="4"></rect><rect x="95" y="354" width="180" height="8" rx="4"></rect><rect x="95" y="376" width="180" height="8" rx="4"></rect></g>
<g fill="#1959FF"><rect x="95" y="332" width="126" height="8" rx="4"></rect><rect x="95" y="354" width="70" height="8" rx="4"></rect><rect x="95" y="376" width="180" height="8" rx="4"></rect></g>
<text x="175" y="425" text-anchor="middle" font-size="15" font-weight="600" fill="#0E1420" style="font-family: Geist, Inter, system-ui, sans-serif">One fleet, run by your team</text>
<path d="M175 439 V461" fill="none" stroke="#1959FF" stroke-width="1.5" stroke-linecap="round" marker-end="url(#fm-blue-m)"></path>
<rect x="59" y="468" width="232" height="84" rx="14" fill="#ffffff" stroke="#0E1420" stroke-opacity="0.22" stroke-width="1.5"></rect>
<rect x="79" y="486" width="48" height="48" rx="12" fill="#EEF3FF"></rect>
<path d="M103 496 L106.6 506.4 L117 510 L106.6 513.6 L103 524 L99.4 513.6 L89 510 L99.4 506.4 Z" fill="#1959FF"></path>
<text x="143" y="507" font-size="11" letter-spacing="1.4" fill="#0E1420" style="font-family: 'Geist Mono', ui-monospace, monospace">AI WORKLOADS</text>
<rect x="143" y="519" width="110" height="6" rx="3" fill="#0E1420" fill-opacity="0.10"></rect>
<text x="175" y="583" text-anchor="middle" font-size="15" font-weight="600" fill="#0E1420" style="font-family: Geist, Inter, system-ui, sans-serif">Compute your customers buy</text>
</svg>`

