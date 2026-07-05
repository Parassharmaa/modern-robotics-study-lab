const chapters = [
  {
    n: 1,
    title: "Preview",
    question: "What is this subject really about?",
    object: "A robot as a physical mechanism: links, joints, actuators, sensors, planning, and control.",
    why: "It gives the vocabulary for the whole course. The goal is not memorizing definitions yet; it is knowing where each future idea fits."
  },
  {
    n: 2,
    title: "Configuration Space",
    question: "Where is the robot?",
    object: "The smallest continuous coordinates needed to describe all robot link positions.",
    why: "Planning and kinematics happen in this space, even when the task is described as a hand or gripper moving in ordinary space."
  },
  {
    n: 3,
    title: "Rigid-Body Motions",
    question: "How do we represent position, orientation, velocity, and force in 3D?",
    object: "Rotation matrices, rigid transformations, twists, and wrenches.",
    why: "This is the language that makes later formulas compact and coordinate-aware."
  },
  {
    n: 4,
    title: "Forward Kinematics",
    question: "Given joint positions, where is the end-effector?",
    object: "The product of exponentials formula for open-chain robots.",
    why: "It turns joint readings into a pose of the hand, tool, camera, or gripper."
  },
  {
    n: 5,
    title: "Velocity Kinematics and Statics",
    question: "How do joint rates create end-effector velocity, and how do endpoint forces map to joints?",
    object: "The Jacobian, singularities, manipulability, and static force relations.",
    why: "The Jacobian is the bridge between small joint motion and useful task-space motion."
  },
  {
    n: 6,
    title: "Inverse Kinematics",
    question: "Given a desired end-effector pose, what joint positions achieve it?",
    object: "Analytic solutions for special arms and numerical Jacobian-based methods for general arms.",
    why: "Tasks are usually stated in the world, but actuators live at the joints."
  },
  {
    n: 7,
    title: "Closed-Chain Kinematics",
    question: "What changes when links form loops?",
    object: "Closed-chain constraints, passive joints, and singularities.",
    why: "Parallel mechanisms can be strong and precise, but their geometry is less direct than serial arms."
  },
  {
    n: 8,
    title: "Dynamics of Open Chains",
    question: "How do forces and torques cause robot motion?",
    object: "Forward dynamics, inverse dynamics, Lagrangian methods, and Newton-Euler recursion.",
    why: "Precise control needs a model of inertia, gravity, Coriolis effects, and actuator effort."
  },
  {
    n: 9,
    title: "Trajectory Generation",
    question: "How do we turn sparse task data into smooth time histories?",
    object: "Paths, time scalings, via points, and time-optimal trajectories.",
    why: "A robot should not need every instant hand-authored; it should fill in a physically reasonable motion."
  },
  {
    n: 10,
    title: "Motion Planning",
    question: "How does the robot find a collision-free route?",
    object: "Grid methods, sampling methods, and potential fields.",
    why: "The robot needs a path through clutter while respecting joint limits and other constraints."
  },
  {
    n: 11,
    title: "Robot Control",
    question: "How do we make the real robot follow the desired behavior?",
    object: "Motion control, force control, hybrid motion-force control, impedance control, and feedback.",
    why: "Models are imperfect, so feedback is the practical answer to uncertainty."
  },
  {
    n: 12,
    title: "Grasping and Manipulation",
    question: "How does a robot make useful contact with objects?",
    object: "Contact constraints, friction, form closure, force closure, pushing, carrying, and stability.",
    why: "Robots matter because they act on the world, not because their joints move nicely in isolation."
  },
  {
    n: 13,
    title: "Wheeled Mobile Robots",
    question: "How do wheels change kinematics, planning, and control?",
    object: "Omnidirectional bases, nonholonomic constraints, odometry, and mobile manipulation Jacobians.",
    why: "Mobile robots add constraints that are velocity-level rather than simple position-level restrictions."
  }
];

const pipeline = [
  ["Model", "Choose coordinates and constraints for the mechanism."],
  ["Kinematics", "Map joint configurations to body and end-effector motion."],
  ["Invert", "Solve for joint coordinates that realize a task-space goal."],
  ["Plan", "Find a collision-free path through feasible configurations."],
  ["Time", "Turn the path into a trajectory with velocities and accelerations."],
  ["Control", "Use actuators and feedback to make the physical robot behave."]
];

const quizzes = [
  {
    q: "Why does Chapter 1 emphasize rigid links and joints?",
    answers: [
      "Because that abstraction lets us describe robot configuration with a small number of variables.",
      "Because all real robots are perfectly rigid and frictionless.",
      "Because sensors are not important until dynamics."
    ],
    correct: 0,
    note: "Right. It is a simplifying model that makes mechanics, planning, and control mathematically tractable."
  },
  {
    q: "What is the difference between task space and workspace?",
    answers: [
      "Task space is the type of pose we care about; workspace is the reachable subset of that task space.",
      "Task space is for planning; workspace is only for control.",
      "They are always identical for any robot arm."
    ],
    correct: 0,
    note: "Exactly. The task may be a desired end-effector pose, while the workspace is what the mechanism can actually reach."
  },
  {
    q: "Why is inverse kinematics usually harder than forward kinematics?",
    answers: [
      "Forward kinematics may have a unique output for given joints, while inverse kinematics can have many, one, or no joint solutions.",
      "Inverse kinematics ignores the Jacobian.",
      "Forward kinematics requires dynamics first."
    ],
    correct: 0,
    note: "Yes. Several joint configurations can reach the same hand pose, and some desired poses may be unreachable."
  },
  {
    q: "What does feedback control compensate for?",
    answers: [
      "Uncertainty in models, disturbances, friction, elasticity, backlash, and other real effects.",
      "The need for sensors.",
      "The geometry of configuration space."
    ],
    correct: 0,
    note: "Good. Feedback is the practical loop that keeps the real machine close to the intended behavior."
  }
];

const chapter2Concepts = [
  {
    title: "Configuration",
    text: "A complete specification of the position of every point of the robot. For rigid links, a small coordinate list can determine all those points."
  },
  {
    title: "Degrees of freedom",
    text: "The minimum number of real-valued coordinates needed to represent configuration. A planar rigid body has 3; a spatial rigid body has 6."
  },
  {
    title: "C-space",
    text: "The space of all possible configurations. A configuration is a point in C-space, and the C-space dimension equals the robot's dof."
  },
  {
    title: "Joints",
    text: "Joints both allow freedoms and impose constraints. Revolute and prismatic joints each allow one relative freedom."
  },
  {
    title: "Grubler's formula",
    text: "For independent constraints, dof = m(N - 1 - J) + sum fi. Use m = 3 for planar mechanisms and m = 6 for spatial mechanisms."
  },
  {
    title: "Topology",
    text: "Dimension is not enough. A plane, sphere, cylinder, and torus can require different coordinate behavior because they wrap differently."
  },
  {
    title: "Representation",
    text: "Explicit coordinates use the minimum number of parameters. Implicit representations use extra coordinates plus constraint equations."
  },
  {
    title: "Holonomic constraints",
    text: "Configuration constraints g(q) = 0 reduce C-space dimension. Closed-chain loop-closure equations are the chapter's main example."
  },
  {
    title: "Nonholonomic constraints",
    text: "Velocity constraints A(q)qdot = 0 restrict feasible velocities but do not reduce reachable C-space, as with rolling without slipping."
  },
  {
    title: "Task space and workspace",
    text: "Task space is chosen from the job. Workspace is the reachable subset for the end-effector. Neither usually specifies the full robot configuration."
  }
];

const dofExamples = {
  door: {
    title: "Door on a hinge",
    dof: 1,
    coords: ["hinge angle"],
    note: "The wall and hinge constrain the rigid door so only one continuous coordinate remains."
  },
  point: {
    title: "Point in a plane",
    dof: 2,
    coords: ["x position", "y position"],
    note: "A point has no orientation, so two coordinates specify its location in the plane."
  },
  coin: {
    title: "Coin on a table",
    dof: 3,
    coords: ["x position", "y position", "heading angle"],
    note: "The coin is a planar rigid body: two coordinates locate one point and one angle fixes orientation."
  },
  planar: {
    title: "Free planar rigid body",
    dof: 3,
    coords: ["x", "y", "theta"],
    note: "Any rigid body moving in a plane needs two position coordinates and one orientation coordinate."
  },
  spatial: {
    title: "Free spatial rigid body",
    dof: 6,
    coords: ["x", "y", "z", "roll-like orientation", "pitch-like orientation", "yaw-like orientation"],
    note: "A rigid body moving freely in space needs three position freedoms and three orientation freedoms."
  }
};

const jointRows = [
  ["Revolute (R)", 1, 2, 5, "Rotation about a joint axis, like a hinge."],
  ["Prismatic (P)", 1, 2, 5, "Translation along a joint axis, like a slider."],
  ["Helical (H)", 1, "N/A", 5, "Rotation and translation coupled along a screw axis."],
  ["Cylindrical (C)", 2, "N/A", 4, "Independent rotation and translation along one axis."],
  ["Universal (U)", 2, "N/A", 4, "Two orthogonal revolute axes."],
  ["Spherical (S)", 3, "N/A", 3, "Ball-and-socket orientation freedom."]
];

const grublerPresets = {
  fourbar: { m: 3, n: 4, f: "1,1,1,1", label: "Planar four-bar: four links including ground, four revolute joints." },
  slider: { m: 3, n: 4, f: "1,1,1,1", label: "Slider-crank as three revolute joints plus one prismatic joint." },
  serial3r: { m: 3, n: 4, f: "1,1,1", label: "Planar open-chain 3R arm: three independently moving revolute joints." },
  fivebar: { m: 3, n: 5, f: "1,1,1,1,1", label: "Planar five-bar linkage: five links including ground and five revolute joints." },
  sixbar: { m: 3, n: 6, f: "1,1,1,1,1,1,1", label: "Stephenson and Watt six-bar linkages: six links including ground and seven revolute joints." },
  overlap: { m: 3, n: 8, f: "1,1,1,1,1,1,1,1,1", label: "Overlapping-joint example counted as eight links, eight revolute joints, and one prismatic joint." },
  parallel: { m: 3, n: 5, f: "1,1,1,1,1,1", label: "Parallelogram warning: Grubler gives 0, but dependent constraints mean the mechanism actually moves with 1 dof." },
  delta: { m: 6, n: 17, f: "1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3", label: "Delta robot source count: 9 revolute and 12 spherical joints gives 15 dof, but only 3 are visible at the moving platform." },
  stewart: { m: 6, n: 14, f: "2,2,2,2,2,2,1,1,1,1,1,1,3,3,3,3,3,3", label: "Stewart-Gough UPS platform: 6 universal, 6 prismatic, and 6 spherical joints give the platform 6 dof." }
};

const topologyNotes = {
  line: ["R1: line", "One unbounded coordinate. There is no wraparound and no endpoint if the coordinate is truly all real numbers."],
  circle: ["S1: circle", "One coordinate can represent it locally, but the coordinate wraps. Angle 0 and angle 2pi are the same configuration."],
  sphere: ["S2: sphere surface", "Two-dimensional but not a plane. Latitude-longitude coordinates have singularities at the poles."],
  cylinder: ["R1 x S1: cylinder", "One unbounded coordinate plus one wrapping coordinate. A rotating sliding knob has this shape."],
  torus: ["S1 x S1: torus", "Two independent wrapping coordinates. A 2R arm with unlimited revolute joints has C-space T2."]
};

const taskExamples = [
  {
    title: "Planar 2R arm",
    cspace: "T2 = S1 x S1 if both revolute joints wrap fully.",
    task: "Often R2 if the task only cares about the tip point.",
    workspace: "An annulus or disk-like reachable region depending on link lengths."
  },
  {
    title: "Planar 3R arm",
    cspace: "T3 for three fully rotating revolute joints.",
    task: "Tip position can still be R2, so the robot may be redundant for that task.",
    workspace: "Can match a 2R arm's Cartesian reach even with a different C-space."
  },
  {
    title: "SCARA RRRP",
    cspace: "Three revolute/prismatic joint coordinates plus a final rotation coordinate.",
    task: "Typically R3 x S1: position plus planar tool orientation.",
    workspace: "Reachable Cartesian points, with all planar tool angles available at many points."
  },
  {
    title: "Spray-painting 6R arm",
    cspace: "Six joint angles for a standard industrial manipulator.",
    task: "R3 x S2 if nozzle spin about its own axis does not matter.",
    workspace: "Reachable nozzle positions and pointing directions; often simplified to reachable positions."
  }
];

const chapter2QuizItems = [
  {
    q: "What is a robot configuration?",
    answers: [
      "A complete specification of the position of every point of the robot.",
      "Only the Cartesian position of the end-effector.",
      "The number of motors installed on the robot."
    ],
    correct: 0,
    note: "Yes. The end-effector alone may not determine the full robot posture."
  },
  {
    q: "What does C-space dimension equal?",
    answers: [
      "The robot's degrees of freedom.",
      "The number of links, excluding ground.",
      "The number of task-space coordinates chosen by the user."
    ],
    correct: 0,
    note: "Right. Degrees of freedom are the minimum real coordinates needed for configuration."
  },
  {
    q: "When is Grubler's formula exact?",
    answers: [
      "When all joint constraints counted by the formula are independent.",
      "Only for open-chain robot arms.",
      "Whenever the mechanism is spatial."
    ],
    correct: 0,
    note: "Exactly. If constraints are dependent, the formula gives a lower bound."
  },
  {
    q: "What is the main danger of explicit coordinates on curved spaces?",
    answers: [
      "Coordinate singularities or wraparound artifacts can appear even when the space itself is smooth.",
      "They always use too many coordinates.",
      "They cannot represent planar robots."
    ],
    correct: 0,
    note: "Good. Latitude-longitude at the poles is the chapter's clean mental model."
  },
  {
    q: "What does a nonholonomic constraint reduce?",
    answers: [
      "The feasible instantaneous velocities, not the reachable C-space dimension.",
      "The number of links.",
      "The task-space dimension selected by the user."
    ],
    correct: 0,
    note: "Yes. Rolling without slipping restricts motion directions, but the coin can still reach its C-space."
  },
  {
    q: "How are task space and workspace different?",
    answers: [
      "Task space is chosen from the job; workspace is what the end-effector can reach.",
      "Task space is always the same as C-space.",
      "Workspace includes all joint configurations."
    ],
    correct: 0,
    note: "Right. Both concern the end-effector, but one is task-driven and the other robot-driven."
  }
];

const angleOne = document.querySelector("#angleOne");
const angleTwo = document.querySelector("#angleTwo");
const angleOneLabel = document.querySelector("#angleOneLabel");
const angleTwoLabel = document.querySelector("#angleTwoLabel");
const armGroup = document.querySelector("#armGroup");
const configCanvas = document.querySelector("#configCanvas");
const taskCanvas = document.querySelector("#taskCanvas");
const configReadout = document.querySelector("#configReadout");
const taskReadout = document.querySelector("#taskReadout");
const chapterSwitches = document.querySelectorAll(".chapter-switch");
const topNav = document.querySelector("nav");
const dofExample = document.querySelector("#dofExample");
const dofCanvas = document.querySelector("#dofCanvas");
const dofReadout = document.querySelector("#dofReadout");
const dofChips = document.querySelector("#dofChips");
const grublerM = document.querySelector("#grublerM");
const grublerN = document.querySelector("#grublerN");
const grublerF = document.querySelector("#grublerF");
const grublerResult = document.querySelector("#grublerResult");
const grublerSteps = document.querySelector("#grublerSteps");
const topologySelect = document.querySelector("#topologySelect");
const topologyText = document.querySelector("#topologyText");
const topologyCanvas = document.querySelector("#topologyCanvas");
const constraintCanvas = document.querySelector("#constraintCanvas");
const constraintText = document.querySelector("#constraintText");

function degToRad(deg) {
  return (deg * Math.PI) / 180;
}

function getArmState() {
  const a1 = Number(angleOne.value);
  const a2 = Number(angleTwo.value);
  const l1 = 135;
  const l2 = 105;
  const base = { x: 180, y: 260 };
  const p1 = {
    x: base.x + l1 * Math.cos(degToRad(a1)),
    y: base.y - l1 * Math.sin(degToRad(a1))
  };
  const p2 = {
    x: p1.x + l2 * Math.cos(degToRad(a1 + a2)),
    y: p1.y - l2 * Math.sin(degToRad(a1 + a2))
  };
  return { a1, a2, base, p1, p2, l1, l2 };
}

function drawArm() {
  const s = getArmState();
  angleOneLabel.textContent = `${s.a1} deg`;
  angleTwoLabel.textContent = `${s.a2} deg`;
  armGroup.innerHTML = `
    <line class="axis" x1="${s.base.x}" y1="${s.base.y}" x2="${s.base.x + 70}" y2="${s.base.y}"></line>
    <line class="link" x1="${s.base.x}" y1="${s.base.y}" x2="${s.p1.x}" y2="${s.p1.y}"></line>
    <line class="link secondary" x1="${s.p1.x}" y1="${s.p1.y}" x2="${s.p2.x}" y2="${s.p2.y}"></line>
    <circle class="joint" cx="${s.base.x}" cy="${s.base.y}" r="17"></circle>
    <circle class="joint" cx="${s.p1.x}" cy="${s.p1.y}" r="14"></circle>
    <circle class="end-effector" cx="${s.p2.x}" cy="${s.p2.y}" r="11"></circle>
  `;
  drawSpaces(s);
}

function setupCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  const box = canvas.getBoundingClientRect();
  const cssWidth = box.width || canvas.parentElement?.getBoundingClientRect().width || 420;
  canvas.width = Math.max(1, Math.floor(cssWidth * ratio));
  canvas.height = Math.max(1, Math.floor((cssWidth * 0.58) * ratio));
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  return { ctx, w: cssWidth, h: cssWidth * 0.58 };
}

function grid(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = "#d6dee6";
  ctx.lineWidth = 1;
  for (let x = 0; x <= w; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y <= h; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
}

function drawSpaces(s) {
  const c = setupCanvas(configCanvas);
  grid(c.ctx, c.w, c.h);
  c.ctx.strokeStyle = "#16202a";
  c.ctx.lineWidth = 2;
  c.ctx.beginPath();
  c.ctx.moveTo(38, c.h - 36);
  c.ctx.lineTo(c.w - 22, c.h - 36);
  c.ctx.moveTo(44, c.h - 24);
  c.ctx.lineTo(44, 22);
  c.ctx.stroke();
  const x = 44 + ((s.a1 + 110) / 255) * (c.w - 82);
  const y = c.h - 36 - ((s.a2 + 150) / 300) * (c.h - 68);
  c.ctx.fillStyle = "#2364aa";
  c.ctx.beginPath();
  c.ctx.arc(x, y, 8, 0, Math.PI * 2);
  c.ctx.fill();
  c.ctx.fillStyle = "#5a6875";
  c.ctx.font = "13px system-ui";
  c.ctx.fillText("joint 1", c.w - 78, c.h - 12);
  c.ctx.save();
  c.ctx.translate(14, 86);
  c.ctx.rotate(-Math.PI / 2);
  c.ctx.fillText("joint 2", 0, 0);
  c.ctx.restore();
  configReadout.textContent = `Configuration q = (${s.a1} deg, ${s.a2} deg). One point here represents the whole arm posture.`;

  const t = setupCanvas(taskCanvas);
  grid(t.ctx, t.w, t.h);
  const scale = Math.min((t.w - 50) / 330, (t.h - 38) / 270);
  const bx = 70;
  const by = t.h - 32;
  function map(p) {
    return { x: bx + (p.x - s.base.x) * scale, y: by + (p.y - s.base.y) * scale };
  }
  const b = map(s.base);
  const p1 = map(s.p1);
  const p2 = map(s.p2);
  t.ctx.strokeStyle = "rgba(35, 100, 170, 0.25)";
  t.ctx.lineWidth = 2;
  t.ctx.beginPath();
  t.ctx.arc(b.x, b.y, (s.l1 + s.l2) * scale, 0, Math.PI * 2);
  t.ctx.stroke();
  t.ctx.strokeStyle = "#2364aa";
  t.ctx.lineWidth = 10;
  t.ctx.lineCap = "round";
  t.ctx.beginPath();
  t.ctx.moveTo(b.x, b.y);
  t.ctx.lineTo(p1.x, p1.y);
  t.ctx.lineTo(p2.x, p2.y);
  t.ctx.stroke();
  t.ctx.fillStyle = "#b84a3a";
  t.ctx.beginPath();
  t.ctx.arc(p2.x, p2.y, 8, 0, Math.PI * 2);
  t.ctx.fill();
  const xWorld = Math.round(s.p2.x - s.base.x);
  const yWorld = Math.round(s.base.y - s.p2.y);
  taskReadout.textContent = `End-effector position is approximately (${xWorld}, ${yWorld}) in this toy plane. Many different q values can point near the same task location.`;
}

function renderChapters() {
  const gridEl = document.querySelector("#chapterGrid");
  const detail = document.querySelector("#chapterDetail");

  function selectChapter(chapter) {
    document.querySelectorAll(".chapter-tile").forEach((tile) => {
      tile.classList.toggle("active", Number(tile.dataset.chapter) === chapter.n);
    });
    detail.innerHTML = `
      <h3>Chapter ${chapter.n}: ${chapter.title}</h3>
      <dl>
        <div><dt>Main question</dt><dd>${chapter.question}</dd></div>
        <div><dt>Core object</dt><dd>${chapter.object}</dd></div>
        <div><dt>Why it matters</dt><dd>${chapter.why}</dd></div>
      </dl>
    `;
  }

  chapters.forEach((chapter) => {
    const button = document.createElement("button");
    button.className = "chapter-tile";
    button.dataset.chapter = chapter.n;
    button.innerHTML = `<span>Chapter ${chapter.n}</span><strong>${chapter.title}</strong>`;
    button.addEventListener("click", () => selectChapter(chapter));
    gridEl.appendChild(button);
  });
  selectChapter(chapters[0]);
}

function renderMechanism(type = "open") {
  const svg = document.querySelector("#mechanismSvg");
  const text = document.querySelector("#mechanismText");
  if (type === "open") {
    svg.innerHTML = `
      <rect class="mech-base" x="38" y="278" width="116" height="34"></rect>
      <line class="mech-link" x1="96" y1="278" x2="185" y2="200"></line>
      <line class="mech-link" x1="185" y1="200" x2="292" y2="222"></line>
      <line class="mech-link" x1="292" y1="222" x2="392" y2="142"></line>
      <circle class="mech-joint" cx="96" cy="278" r="17"></circle>
      <circle class="mech-joint" cx="185" cy="200" r="17"></circle>
      <circle class="mech-joint" cx="292" cy="222" r="17"></circle>
      <circle class="mech-joint" cx="392" cy="142" r="12"></circle>
      <text class="mech-note" x="62" y="334">base</text>
      <text class="mech-note" x="338" y="112">end-effector</text>
    `;
    text.textContent = "In an open chain, links form a serial chain from base to end-effector. For common robot arms, each joint is usually actuated. This makes forward kinematics conceptually direct: start at the base, multiply transformations along the chain, and arrive at the hand.";
  } else {
    svg.innerHTML = `
      <rect class="mech-base" x="70" y="284" width="380" height="28"></rect>
      <polygon points="206,116 344,116 394,176 156,176" fill="#eef3f7" stroke="#16202a" stroke-width="4"></polygon>
      <line class="mech-link" x1="116" y1="284" x2="178" y2="176"></line>
      <line class="mech-link" x1="226" y1="284" x2="226" y2="176"></line>
      <line class="mech-link" x1="336" y1="284" x2="322" y2="176"></line>
      <line class="mech-link" x1="430" y1="284" x2="372" y2="176"></line>
      <circle class="mech-joint" cx="116" cy="284" r="14"></circle>
      <circle class="mech-joint" cx="226" cy="284" r="14"></circle>
      <circle class="mech-joint" cx="336" cy="284" r="14"></circle>
      <circle class="mech-joint" cx="430" cy="284" r="14"></circle>
      <circle class="mech-joint" cx="178" cy="176" r="14"></circle>
      <circle class="mech-joint" cx="226" cy="176" r="14"></circle>
      <circle class="mech-joint" cx="322" cy="176" r="14"></circle>
      <circle class="mech-joint" cx="372" cy="176" r="14"></circle>
      <text class="mech-note" x="190" y="86">moving platform</text>
      <text class="mech-note" x="168" y="334">closed loops through the base and platform</text>
    `;
    text.textContent = "In a closed chain, links form loops. Some joints may be passive rather than directly actuated. The loop constraints can make forward kinematics and singularity analysis subtler, which is why the book treats closed chains separately after open-chain kinematics.";
  }
}

function renderPipeline() {
  const el = document.querySelector("#pipeline");
  el.innerHTML = pipeline.map((step, index) => `
    <article class="pipe-step">
      <b>${index + 1}</b>
      <div><h3>${step[0]}</h3><p>${step[1]}</p></div>
    </article>
  `).join("");
}

function renderQuiz() {
  const box = document.querySelector("#quizBox");
  quizzes.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "quiz-card";
    card.innerHTML = `
      <h3>${index + 1}. ${item.q}</h3>
      <div class="answers"></div>
      <p class="feedback" aria-live="polite"></p>
    `;
    const answers = card.querySelector(".answers");
    const feedback = card.querySelector(".feedback");
    item.answers.forEach((answer, answerIndex) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.addEventListener("click", () => {
        answers.querySelectorAll("button").forEach((b) => b.classList.remove("selected"));
        button.classList.add("selected");
        feedback.textContent = answerIndex === item.correct ? item.note : "Close enough to be useful, but Chapter 1 points the other way. Try the first answer and compare the explanation.";
      });
      answers.appendChild(button);
    });
    box.appendChild(card);
  });
}

function renderGenericQuiz(containerSelector, items, wrongText) {
  const box = document.querySelector(containerSelector);
  box.innerHTML = "";
  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "quiz-card";
    card.innerHTML = `
      <h3>${index + 1}. ${item.q}</h3>
      <div class="answers"></div>
      <p class="feedback" aria-live="polite"></p>
    `;
    const answers = card.querySelector(".answers");
    const feedback = card.querySelector(".feedback");
    item.answers.forEach((answer, answerIndex) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.addEventListener("click", () => {
        answers.querySelectorAll("button").forEach((b) => b.classList.remove("selected"));
        button.classList.add("selected");
        feedback.textContent = answerIndex === item.correct ? item.note : wrongText;
      });
      answers.appendChild(button);
    });
    box.appendChild(card);
  });
}

function renderChapter2Concepts() {
  const el = document.querySelector("#chapter2Concepts");
  el.innerHTML = chapter2Concepts.map((item, index) => `
    <article class="concept-card">
      <h3>${index + 1}. ${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderJointTable() {
  const body = document.querySelector("#jointTable");
  body.innerHTML = jointRows.map((row) => `
    <tr>
      <td>${row[0]}<br><span>${row[4]}</span></td>
      <td>${row[1]}</td>
      <td>${row[2]}</td>
      <td>${row[3]}</td>
    </tr>
  `).join("");
}

function drawDofExample() {
  const item = dofExamples[dofExample.value];
  dofReadout.innerHTML = `<strong>${item.dof}</strong><span>${item.title}: ${item.note}</span>`;
  dofChips.innerHTML = item.coords.map((coord) => `<span class="chip">${coord}</span>`).join("");
  const { ctx, w, h } = setupCanvas(dofCanvas);
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#fbfdff";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "#d6dee6";
  ctx.lineWidth = 1;
  for (let x = 0; x <= w; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y <= h; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.lineCap = "round";
  if (dofExample.value === "door") {
    ctx.fillStyle = "#d9e2ea";
    ctx.fillRect(-150, -22, 32, 110);
    ctx.strokeStyle = "#2364aa";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(-118, -18);
    ctx.lineTo(92, -86);
    ctx.stroke();
    ctx.fillStyle = "#b84a3a";
    ctx.beginPath();
    ctx.arc(-118, -18, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#5a6875";
    ctx.fillText("one angle", -20, -108);
  } else if (dofExample.value === "point") {
    ctx.strokeStyle = "#16202a";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-150, 88);
    ctx.lineTo(160, 88);
    ctx.moveTo(-130, 110);
    ctx.lineTo(-130, -105);
    ctx.stroke();
    ctx.fillStyle = "#2364aa";
    ctx.beginPath();
    ctx.arc(54, -22, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#5a6875";
    ctx.fillText("(x, y)", 70, -28);
  } else if (dofExample.value === "spatial") {
    ctx.strokeStyle = "#16202a";
    ctx.lineWidth = 3;
    ctx.strokeRect(-84, -58, 168, 116);
    ctx.strokeStyle = "#2364aa";
    ctx.beginPath();
    ctx.moveTo(-84, -58);
    ctx.lineTo(-44, -104);
    ctx.lineTo(124, -104);
    ctx.lineTo(84, -58);
    ctx.moveTo(84, 58);
    ctx.lineTo(124, 12);
    ctx.lineTo(124, -104);
    ctx.stroke();
    ctx.fillStyle = "#2a8c6d";
    ctx.fillText("3 position + 3 orientation freedoms", -120, 102);
  } else {
    ctx.rotate(-0.45);
    ctx.fillStyle = dofExample.value === "coin" ? "#d39b25" : "#edf5ff";
    ctx.strokeStyle = "#2364aa";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(0, 0, 112, 62, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "#b84a3a";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(92, 0);
    ctx.stroke();
    ctx.fillStyle = "#16202a";
    ctx.beginPath();
    ctx.arc(0, 0, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.rotate(0.45);
    ctx.fillStyle = "#5a6875";
    ctx.fillText("x, y locate a point; theta fixes orientation", -150, 114);
  }
  ctx.restore();
}

function calculateGrubler() {
  const m = Number(grublerM.value);
  const n = Number(grublerN.value);
  const freedoms = grublerF.value.split(",").map((part) => Number(part.trim())).filter((value) => Number.isFinite(value));
  const j = freedoms.length;
  const sumF = freedoms.reduce((sum, value) => sum + value, 0);
  const dof = m * (n - 1 - j) + sumF;
  grublerResult.textContent = `${dof} dof`;
  grublerSteps.textContent = `m = ${m}, N = ${n}, J = ${j}, sum fi = ${sumF}. Calculation: ${m}(${n} - 1 - ${j}) + ${sumF} = ${dof}.`;
}

function drawTopology() {
  const value = topologySelect.value;
  const [title, text] = topologyNotes[value];
  topologyText.innerHTML = `<strong>${title}</strong><br>${text}`;
  const { ctx, w, h } = setupCanvas(topologyCanvas);
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#fbfdff";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "#d6dee6";
  ctx.lineWidth = 1;
  for (let x = 0; x <= w; x += 36) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y <= h; y += 36) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#2364aa";
  ctx.fillStyle = "rgba(35, 100, 170, 0.12)";
  if (value === "line") {
    ctx.beginPath();
    ctx.moveTo(-180, 0);
    ctx.lineTo(180, 0);
    ctx.stroke();
    ctx.fillStyle = "#5a6875";
    ctx.fillText("no wrap", -26, -24);
  } else if (value === "circle") {
    ctx.beginPath();
    ctx.arc(0, 0, 105, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#b84a3a";
    ctx.beginPath();
    ctx.arc(105, 0, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#5a6875";
    ctx.fillText("0 = 2pi", 76, -16);
  } else if (value === "sphere") {
    ctx.beginPath();
    ctx.arc(0, 0, 115, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "#2a8c6d";
    for (let y = -70; y <= 70; y += 35) {
      ctx.beginPath();
      ctx.ellipse(0, y, Math.sqrt(115 * 115 - y * y), 18, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.strokeStyle = "#b84a3a";
    ctx.beginPath();
    ctx.moveTo(0, -115);
    ctx.lineTo(0, 115);
    ctx.stroke();
  } else if (value === "cylinder") {
    ctx.beginPath();
    ctx.ellipse(0, -86, 110, 32, 0, 0, Math.PI * 2);
    ctx.moveTo(-110, -86);
    ctx.lineTo(-110, 90);
    ctx.moveTo(110, -86);
    ctx.lineTo(110, 90);
    ctx.ellipse(0, 90, 110, 32, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#5a6875";
    ctx.fillText("slide + rotate", -45, 126);
  } else {
    ctx.beginPath();
    ctx.ellipse(0, 0, 140, 82, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(0, 0, 62, 28, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "#2a8c6d";
    ctx.beginPath();
    ctx.ellipse(-52, 0, 26, 82, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#5a6875";
    ctx.fillText("two independent wraps", -70, 124);
  }
  ctx.restore();
}

function drawConstraint(type = "holonomic") {
  const { ctx, w, h } = setupCanvas(constraintCanvas);
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#fbfdff";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "#d6dee6";
  ctx.lineWidth = 1;
  for (let x = 0; x <= w; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y <= h; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  ctx.save();
  ctx.translate(w / 2, h / 2);
  if (type === "holonomic") {
    constraintText.textContent = "Holonomic constraints are configuration equations. A four-bar linkage can be viewed as a serial chain whose tip must close back to the base, producing loop-closure equations g(q) = 0. Those equations carve a lower-dimensional surface out of a larger coordinate space.";
    ctx.strokeStyle = "#16202a";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    const pts = [[-150, 50], [-50, -72], [76, -34], [150, 50], [-150, 50]];
    ctx.beginPath();
    pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]));
    ctx.stroke();
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#2364aa";
    ctx.lineWidth = 4;
    pts.slice(0, 4).forEach((p) => {
      ctx.beginPath();
      ctx.arc(p[0], p[1], 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
    ctx.fillStyle = "#5a6875";
    ctx.fillText("loop closure: endpoint must return to base", -132, 112);
  } else {
    constraintText.textContent = "Nonholonomic constraints are velocity equations that cannot be integrated into equivalent configuration equations. A rolling coin cannot instantly move sideways, but by steering and rolling it can still reach configurations throughout its four-dimensional C-space.";
    ctx.strokeStyle = "#2364aa";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(-170, 72);
    ctx.bezierCurveTo(-80, -84, 40, 116, 156, -54);
    ctx.stroke();
    ctx.fillStyle = "#d39b25";
    ctx.strokeStyle = "#16202a";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(44, 8, 36, 58, -0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "#b84a3a";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(44, 8);
    ctx.lineTo(94, -22);
    ctx.stroke();
    ctx.fillStyle = "#5a6875";
    ctx.fillText("no sideways slip: velocity is constrained", -122, 120);
  }
  ctx.restore();
}

function renderTaskCards() {
  const el = document.querySelector("#taskCards");
  el.innerHTML = taskExamples.map((item) => `
    <article class="task-card">
      <h3>${item.title}</h3>
      <dl>
        <div><dt>C-space</dt><dd>${item.cspace}</dd></div>
        <div><dt>Task space</dt><dd>${item.task}</dd></div>
        <div><dt>Workspace</dt><dd>${item.workspace}</dd></div>
      </dl>
    </article>
  `).join("");
}

function redrawActiveChapter() {
  const active = document.querySelector(".chapter-view.active")?.dataset.chapterView;
  if (active === "1") {
    drawArm();
  }
  if (active === "2") {
    drawDofExample();
    calculateGrubler();
    drawTopology();
    const selected = document.querySelector(".constraint-mode.active")?.dataset.constraint || "holonomic";
    drawConstraint(selected);
  }
}

const navLinksByChapter = {
  "1": [
    ["Roadmap", "#map"],
    ["Mechanisms", "#mechanism"],
    ["Spaces", "#spaces"],
    ["Check", "#quiz"]
  ],
  "2": [
    ["Spine", "#chapter2-spine"],
    ["DOF", "#chapter2-dof"],
    ["Joints", "#chapter2-joints"],
    ["Grubler", "#chapter2-grubler"],
    ["Topology", "#chapter2-topology"],
    ["Constraints", "#chapter2-constraints"],
    ["Task", "#chapter2-task"],
    ["Check", "#chapter2-check"]
  ]
};

function setChapter(chapterNumber) {
  document.querySelectorAll(".chapter-view").forEach((view) => {
    view.classList.toggle("active", view.dataset.chapterView === chapterNumber);
  });
  chapterSwitches.forEach((button) => {
    button.classList.toggle("active", button.dataset.targetChapter === chapterNumber);
  });
  topNav.innerHTML = navLinksByChapter[chapterNumber].map(([label, href]) => `<a href="${href}">${label}</a>`).join("");
  redrawActiveChapter();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".mode").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mode").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    renderMechanism(button.dataset.mechanism);
  });
});

chapterSwitches.forEach((button) => {
  button.addEventListener("click", () => setChapter(button.dataset.targetChapter));
});

dofExample.addEventListener("change", drawDofExample);
grublerM.addEventListener("change", calculateGrubler);
grublerN.addEventListener("input", calculateGrubler);
grublerF.addEventListener("input", calculateGrubler);
document.querySelectorAll(".preset").forEach((button) => {
  button.addEventListener("click", () => {
    const preset = grublerPresets[button.dataset.preset];
    grublerM.value = String(preset.m);
    grublerN.value = String(preset.n);
    grublerF.value = preset.f;
    calculateGrubler();
    grublerSteps.textContent += ` ${preset.label}`;
  });
});
topologySelect.addEventListener("change", drawTopology);
document.querySelectorAll(".constraint-mode").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".constraint-mode").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    drawConstraint(button.dataset.constraint);
  });
});
angleOne.addEventListener("input", drawArm);
angleTwo.addEventListener("input", drawArm);
window.addEventListener("resize", redrawActiveChapter);

renderChapters();
renderMechanism();
renderPipeline();
renderQuiz();
renderChapter2Concepts();
renderJointTable();
renderTaskCards();
renderGenericQuiz("#chapter2Quiz", chapter2QuizItems, "Not quite. Revisit the concept card above, then compare this option to the definition from Chapter 2.");
setChapter("1");
drawArm();
