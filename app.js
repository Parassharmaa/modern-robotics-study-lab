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

const chapter3Concepts = [
  {
    title: "Planar rigid-body motion",
    text: "A planar pose uses two position coordinates and one orientation angle. The same transform can move a body or convert coordinates between frames."
  },
  {
    title: "Rotation matrices",
    text: "A rotation matrix R in SO(3) has orthonormal columns, determinant 1, and inverse equal to transpose. Its columns are one frame's axes written in another frame."
  },
  {
    title: "Angular velocity",
    text: "Angular velocity can be expressed in space or body coordinates. The skew matrix [omega] represents the cross-product operation."
  },
  {
    title: "Exponential coordinates for rotation",
    text: "A rotation can be represented by a unit axis omega-hat and an angle theta. Rodrigues' formula turns [omega]theta into R."
  },
  {
    title: "Homogeneous transforms",
    text: "A matrix T in SE(3) packages R and p, making pose composition, inverse transforms, and point transformations one consistent operation."
  },
  {
    title: "Twists",
    text: "A twist V = (omega, v) is the six-vector velocity of a rigid body. Revolute, prismatic, and helical motions all fit the same representation."
  },
  {
    title: "Adjoint transforms",
    text: "The adjoint representation changes twist coordinates from one frame to another without changing the physical motion."
  },
  {
    title: "Screw motions",
    text: "Finite rigid-body motions can be described as rotation about and translation along a screw axis. This is the geometric meaning of exp([S]theta)."
  },
  {
    title: "Wrenches",
    text: "A wrench combines moment and force. Wrenches transform dual to twists, and their dot product with twists gives mechanical power."
  },
  {
    title: "Why this chapter matters",
    text: "Forward kinematics, Jacobians, statics, inverse kinematics, dynamics, and control all reuse these representations."
  }
];

const chapter3QuizItems = [
  {
    q: "What does a rotation matrix represent in Chapter 3?",
    answers: [
      "An orientation, with orthonormal columns and determinant 1.",
      "Only an angular velocity.",
      "A force and moment pair."
    ],
    correct: 0,
    note: "Yes. A rotation matrix is an orientation representation in SO(3), and it also maps coordinates between frames."
  },
  {
    q: "Why is R inverse equal to R transpose for a rotation matrix?",
    answers: [
      "Its columns form an orthonormal basis.",
      "Its entries must all be positive.",
      "It is always diagonal."
    ],
    correct: 0,
    note: "Right. Orthogonality gives R^T R = I, so R^T is the inverse."
  },
  {
    q: "What does the bracket operator [omega] do?",
    answers: [
      "It turns omega into a skew-symmetric matrix so [omega]p = omega cross p.",
      "It extracts a translation vector from T.",
      "It computes determinant 1."
    ],
    correct: 0,
    note: "Exactly. This is why angular velocity can appear naturally inside matrix equations."
  },
  {
    q: "What is stored in a homogeneous transformation T in SE(3)?",
    answers: [
      "A rotation R and position p packaged in a 4 by 4 matrix.",
      "Only three Euler angles.",
      "Only a six-dimensional velocity."
    ],
    correct: 0,
    note: "Good. T = (R, p) is the basic rigid-body pose object."
  },
  {
    q: "What is a twist?",
    answers: [
      "A six-vector rigid-body velocity, usually written V = (omega, v).",
      "A matrix of joint limits.",
      "A scalar path length."
    ],
    correct: 0,
    note: "Yes. Twists are the velocity-side partner of rigid-body transformations."
  },
  {
    q: "Why do wrenches pair naturally with twists?",
    answers: [
      "Their dot product gives power.",
      "Both are always unit length.",
      "Both are only planar quantities."
    ],
    correct: 0,
    note: "Right. Moment with angular velocity plus force with linear velocity is mechanical power."
  }
];

const chapter4Concepts = [
  {
    title: "Forward kinematics problem",
    text: "Given joint coordinates theta, compute the position and orientation of the end-effector frame."
  },
  {
    title: "Planar 3R warmup",
    text: "For three planar revolute joints, x and y are sums of link vectors and phi is theta1 + theta2 + theta3."
  },
  {
    title: "Home configuration M",
    text: "M is the end-effector pose when all joint coordinates are zero. It anchors the PoE formula."
  },
  {
    title: "Space screw axes",
    text: "Screw axes Si are written in the fixed base frame at the home configuration."
  },
  {
    title: "Product of exponentials",
    text: "Each e^[Si]thetai is a rigid-body motion caused by one joint. Multiplying them composes the chain."
  },
  {
    title: "Body screw axes",
    text: "The same robot can be described with body-frame screw axes Bi, giving T = M e^[B1]theta1 ... e^[Bn]thetan."
  },
  {
    title: "Order matters",
    text: "Rigid-body transformations generally do not commute, so the order of exponentials carries the robot's serial structure."
  },
  {
    title: "URDF",
    text: "URDF is an XML robot-description format for links, joints, frames, geometry, inertia, axes, and limits."
  }
];

const chapter4QuizItems = [
  {
    q: "What is the input to forward kinematics?",
    answers: [
      "The joint coordinates theta.",
      "The desired end-effector pose.",
      "Only the robot mass matrix."
    ],
    correct: 0,
    note: "Yes. Forward kinematics maps joint values to the end-effector pose."
  },
  {
    q: "In the space-frame PoE formula, where are the screw axes expressed?",
    answers: [
      "In the fixed base or space frame at the home configuration.",
      "In the moving end-effector frame after every joint moves.",
      "Only in URDF link frames."
    ],
    correct: 0,
    note: "Right. Slist is fixed at home, which makes the formula systematic."
  },
  {
    q: "What is M in T(theta) = e^[S1]theta1 ... e^[Sn]thetan M?",
    answers: [
      "The home configuration of the end-effector.",
      "The current mass matrix.",
      "The mobile base pose."
    ],
    correct: 0,
    note: "Exactly. M is the end-effector transform when all joint coordinates are zero."
  },
  {
    q: "For a revolute joint through point q with direction omega, what is v?",
    answers: [
      "v = -omega cross q.",
      "v = omega plus q.",
      "v is always zero."
    ],
    correct: 0,
    note: "Good. The pair S = (omega, v) encodes the joint axis as a screw."
  },
  {
    q: "Why does exponential order matter?",
    answers: [
      "Rigid-body transformations generally do not commute.",
      "The book chooses the order randomly.",
      "Only prismatic joints can be first."
    ],
    correct: 0,
    note: "Yes. Serial-chain geometry is carried by the ordered product."
  },
  {
    q: "What does URDF mainly provide?",
    answers: [
      "A structured description of links, joints, axes, origins, geometry, and inertial data.",
      "A numerical inverse kinematics solver.",
      "A replacement for all coordinate frames."
    ],
    correct: 0,
    note: "Right. URDF stores robot structure; kinematics software then consumes it."
  }
];

const chapter5Concepts = [
  {
    title: "Manipulator Jacobian",
    text: "The Jacobian maps joint rates to the end-effector twist at the current configuration."
  },
  {
    title: "Space Jacobian",
    text: "The space Jacobian expresses the twist in the fixed frame and builds columns from proximal to distal joints."
  },
  {
    title: "Body Jacobian",
    text: "The body Jacobian expresses the same twist in the end-effector frame and builds columns from distal to proximal effects."
  },
  {
    title: "Inverse velocity kinematics",
    text: "If V = J thetadot, then solving for joint rates is a linear algebra problem, often using a pseudoinverse."
  },
  {
    title: "Statics",
    text: "Endpoint wrench F maps to joint torques through tau = J^T F, the dual of velocity kinematics."
  },
  {
    title: "Singularities",
    text: "At singular configurations the Jacobian loses rank, causing loss of motion directions or unbounded joint-rate demands."
  },
  {
    title: "Manipulability",
    text: "The velocity manipulability ellipsoid shows which end-effector velocity directions are easy or hard for unit joint-rate effort."
  },
  {
    title: "Why it matters",
    text: "Jacobians sit under resolved-rate control, force control, singularity avoidance, redundancy resolution, and motion planning."
  }
];

const chapter5QuizItems = [
  {
    q: "What does the manipulator Jacobian map?",
    answers: [
      "Joint rates to an end-effector twist.",
      "Joint torques directly to joint angles.",
      "URDF XML to mass properties."
    ],
    correct: 0,
    note: "Yes. The Jacobian is the local velocity map."
  },
  {
    q: "What changes between a space Jacobian and a body Jacobian?",
    answers: [
      "The coordinate frame used to express the same physical twist.",
      "The robot's number of joints.",
      "Whether the robot has actuators."
    ],
    correct: 0,
    note: "Right. Space and body Jacobians describe the same motion in different frames."
  },
  {
    q: "What is the statics relationship for endpoint wrench F?",
    answers: [
      "tau = J^T F.",
      "F = J^T tau always.",
      "tau = J F."
    ],
    correct: 0,
    note: "Exactly. The transpose maps endpoint wrench to generalized joint torques."
  },
  {
    q: "What happens at a singularity?",
    answers: [
      "The Jacobian loses rank and some task velocity directions are lost.",
      "All links become massless.",
      "Forward kinematics stops existing."
    ],
    correct: 0,
    note: "Good. The pose still exists, but the local velocity map loses directions."
  },
  {
    q: "What does a manipulability ellipse visualize?",
    answers: [
      "The endpoint velocity directions produced by bounded joint rates.",
      "The robot's collision geometry.",
      "Only the endpoint force direction."
    ],
    correct: 0,
    note: "Yes. Long axes are easy velocity directions; short axes are hard directions."
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
const planeX = document.querySelector("#planeX");
const planeY = document.querySelector("#planeY");
const planeTheta = document.querySelector("#planeTheta");
const planeXLabel = document.querySelector("#planeXLabel");
const planeYLabel = document.querySelector("#planeYLabel");
const planeThetaLabel = document.querySelector("#planeThetaLabel");
const planeCanvas = document.querySelector("#planeCanvas");
const planeMatrix = document.querySelector("#planeMatrix");
const rotAxis = document.querySelector("#rotAxis");
const rotAngle = document.querySelector("#rotAngle");
const rotAngleLabel = document.querySelector("#rotAngleLabel");
const rotationCanvas = document.querySelector("#rotationCanvas");
const rotationMatrix = document.querySelector("#rotationMatrix");
const rotationNote = document.querySelector("#rotationNote");
const angularCanvas = document.querySelector("#angularCanvas");
const skewMatrix = document.querySelector("#skewMatrix");
const se3X = document.querySelector("#se3X");
const se3Y = document.querySelector("#se3Y");
const se3Yaw = document.querySelector("#se3Yaw");
const se3XLabel = document.querySelector("#se3XLabel");
const se3YLabel = document.querySelector("#se3YLabel");
const se3YawLabel = document.querySelector("#se3YawLabel");
const se3Canvas = document.querySelector("#se3Canvas");
const se3Matrix = document.querySelector("#se3Matrix");
const twistMode = document.querySelector("#twistMode");
const twistTheta = document.querySelector("#twistTheta");
const twistPitch = document.querySelector("#twistPitch");
const twistThetaLabel = document.querySelector("#twistThetaLabel");
const twistPitchLabel = document.querySelector("#twistPitchLabel");
const twistCanvas = document.querySelector("#twistCanvas");
const twistReadout = document.querySelector("#twistReadout");
const wrenchCanvas = document.querySelector("#wrenchCanvas");
const wrenchPower = document.querySelector("#wrenchPower");
const fkTheta1 = document.querySelector("#fkTheta1");
const fkTheta2 = document.querySelector("#fkTheta2");
const fkTheta3 = document.querySelector("#fkTheta3");
const fkTheta1Label = document.querySelector("#fkTheta1Label");
const fkTheta2Label = document.querySelector("#fkTheta2Label");
const fkTheta3Label = document.querySelector("#fkTheta3Label");
const fkReadout = document.querySelector("#fkReadout");
const fkCanvas = document.querySelector("#fkCanvas");
const screwReadout = document.querySelector("#screwReadout");
const screwCanvas = document.querySelector("#screwCanvas");
const jacTheta1 = document.querySelector("#jacTheta1");
const jacTheta2 = document.querySelector("#jacTheta2");
const jacRate1 = document.querySelector("#jacRate1");
const jacRate2 = document.querySelector("#jacRate2");
const jacTheta1Label = document.querySelector("#jacTheta1Label");
const jacTheta2Label = document.querySelector("#jacTheta2Label");
const jacRate1Label = document.querySelector("#jacRate1Label");
const jacRate2Label = document.querySelector("#jacRate2Label");
const jacobianReadout = document.querySelector("#jacobianReadout");
const jacobianCanvas = document.querySelector("#jacobianCanvas");
const forceX = document.querySelector("#forceX");
const forceY = document.querySelector("#forceY");
const forceXLabel = document.querySelector("#forceXLabel");
const forceYLabel = document.querySelector("#forceYLabel");
const staticsReadout = document.querySelector("#staticsReadout");
const staticsCanvas = document.querySelector("#staticsCanvas");
const manipReadout = document.querySelector("#manipReadout");
const manipCanvas = document.querySelector("#manipCanvas");

function degToRad(deg) {
  return (deg * Math.PI) / 180;
}

function fmt(value) {
  return Math.abs(value) < 0.0005 ? "0.000" : value.toFixed(3);
}

function matrixHtml(rows) {
  return `<table class="mini-matrix">${rows.map((row) => `<tr>${row.map((value) => `<td>${value}</td>`).join("")}</tr>`).join("")}</table>`;
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

function renderChapter3Concepts() {
  const el = document.querySelector("#chapter3Concepts");
  el.innerHTML = chapter3Concepts.map((item, index) => `
    <article class="concept-card">
      <h3>${index + 1}. ${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function drawFrame2d(ctx, x, y, angle, label, scale = 72) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#b84a3a";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + c * scale, y - s * scale);
  ctx.stroke();
  ctx.strokeStyle = "#2a8c6d";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - s * scale, y - c * scale);
  ctx.stroke();
  ctx.fillStyle = "#16202a";
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.font = "13px system-ui";
  ctx.fillText(label, x + 8, y - 8);
}

function drawPlaneMotion() {
  const x = Number(planeX.value);
  const y = Number(planeY.value);
  const theta = Number(planeTheta.value);
  planeXLabel.textContent = String(x);
  planeYLabel.textContent = String(y);
  planeThetaLabel.textContent = `${theta} deg`;
  const r = degToRad(theta);
  const c = Math.cos(r);
  const s = Math.sin(r);
  planeMatrix.innerHTML = `<strong>T in SE(2)</strong>${matrixHtml([
    [fmt(c), fmt(-s), x],
    [fmt(s), fmt(c), y],
    ["0", "0", "1"]
  ])}<p>The first two columns are rotated body axes; the last column is the frame origin.</p>`;

  const { ctx, w, h } = setupCanvas(planeCanvas);
  grid(ctx, w, h);
  const ox = w / 2;
  const oy = h / 2 + 40;
  ctx.strokeStyle = "#16202a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(35, oy);
  ctx.lineTo(w - 35, oy);
  ctx.moveTo(ox, h - 28);
  ctx.lineTo(ox, 28);
  ctx.stroke();
  drawFrame2d(ctx, ox, oy, 0, "{s}", 70);
  drawFrame2d(ctx, ox + x, oy - y, r, "{b}", 80);
  ctx.strokeStyle = "#2364aa";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(ox, oy);
  ctx.lineTo(ox + x, oy - y);
  ctx.stroke();
  ctx.setLineDash([]);
}

function axisVector(name) {
  if (name === "x") return [1, 0, 0];
  if (name === "y") return [0, 1, 0];
  if (name === "diag") {
    const v = 1 / Math.sqrt(3);
    return [v, v, v];
  }
  return [0, 0, 1];
}

function rotationFromAxisAngle(axis, theta) {
  const [x, y, z] = axis;
  const c = Math.cos(theta);
  const s = Math.sin(theta);
  const C = 1 - c;
  return [
    [c + x * x * C, x * y * C - z * s, x * z * C + y * s],
    [y * x * C + z * s, c + y * y * C, y * z * C - x * s],
    [z * x * C - y * s, z * y * C + x * s, c + z * z * C]
  ];
}

function drawRotationLab() {
  const axis = axisVector(rotAxis.value);
  const angle = Number(rotAngle.value);
  const theta = degToRad(angle);
  const R = rotationFromAxisAngle(axis, theta);
  rotAngleLabel.textContent = `${angle} deg`;
  rotationMatrix.innerHTML = `<strong>R = exp([omega]theta)</strong>${matrixHtml(R.map((row) => row.map(fmt)))}
    <p>omega-hat theta = (${axis.map((v) => fmt(v * theta)).join(", ")}). Columns remain perpendicular unit axes.</p>`;
  rotationNote.innerHTML = "<strong>SO(3) checks</strong><br>R transpose R = I and det(R) = 1. This lab builds R using Rodrigues' formula.";

  const { ctx, w, h } = setupCanvas(rotationCanvas);
  grid(ctx, w, h);
  const cx = w / 2;
  const cy = h / 2 + 18;
  ctx.strokeStyle = "rgba(35, 100, 170, 0.18)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, 105, 0, Math.PI * 2);
  ctx.stroke();
  drawFrame2d(ctx, cx, cy, 0, "space", 76);
  drawFrame2d(ctx, cx, cy, theta, "rotated", 108);
  ctx.fillStyle = "#5a6875";
  ctx.fillText(`axis = (${axis.map(fmt).join(", ")})`, 28, 34);
}

function drawAngularVelocity() {
  const omega = [0, 0, 1.2];
  const p = [1.4, 0.65, 0];
  const velocity = [-omega[2] * p[1], omega[2] * p[0], 0];
  skewMatrix.innerHTML = `<strong>[omega] and omega cross p</strong>${matrixHtml([
    ["0", fmt(-omega[2]), fmt(omega[1])],
    [fmt(omega[2]), "0", fmt(-omega[0])],
    [fmt(-omega[1]), fmt(omega[0]), "0"]
  ])}<p>For p = (${p.map(fmt).join(", ")}), [omega]p = (${velocity.map(fmt).join(", ")}).</p>`;

  const { ctx, w, h } = setupCanvas(angularCanvas);
  grid(ctx, w, h);
  const cx = w / 2;
  const cy = h / 2;
  ctx.strokeStyle = "#2364aa";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(cx, cy, 95, 0, Math.PI * 2);
  ctx.stroke();
  const px = cx + p[0] * 70;
  const py = cy - p[1] * 70;
  ctx.fillStyle = "#b84a3a";
  ctx.beginPath();
  ctx.arc(px, py, 9, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#2a8c6d";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(px, py);
  ctx.lineTo(px + velocity[0] * 52, py - velocity[1] * 52);
  ctx.stroke();
  ctx.fillStyle = "#5a6875";
  ctx.fillText("velocity is tangent to the circular path", cx - 128, h - 28);
}

function drawSe3Lab() {
  const x = Number(se3X.value) / 10;
  const y = Number(se3Y.value) / 10;
  const yaw = Number(se3Yaw.value);
  const theta = degToRad(yaw);
  const c = Math.cos(theta);
  const s = Math.sin(theta);
  se3XLabel.textContent = fmt(x);
  se3YLabel.textContent = fmt(y);
  se3YawLabel.textContent = `${yaw} deg`;
  se3Matrix.innerHTML = `<strong>T in SE(3), shown with yaw-only R</strong>${matrixHtml([
    [fmt(c), fmt(-s), "0", fmt(x)],
    [fmt(s), fmt(c), "0", fmt(y)],
    ["0", "0", "1", "0"],
    ["0", "0", "0", "1"]
  ])}<p>Composition multiplies transforms; inversion transposes R and moves p back through that transpose.</p>`;

  const { ctx, w, h } = setupCanvas(se3Canvas);
  grid(ctx, w, h);
  const ox = w / 2;
  const oy = h / 2 + 38;
  drawFrame2d(ctx, ox, oy, 0, "{s}", 72);
  drawFrame2d(ctx, ox + x * 80, oy - y * 80, theta, "{b}", 92);
  ctx.strokeStyle = "#2364aa";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(ox, oy);
  ctx.lineTo(ox + x * 80, oy - y * 80);
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawTwistLab() {
  const mode = twistMode.value;
  const thetaDeg = Number(twistTheta.value);
  const pitch = Number(twistPitch.value) / 100;
  const theta = degToRad(thetaDeg);
  twistThetaLabel.textContent = `${thetaDeg} deg`;
  twistPitchLabel.textContent = fmt(pitch);
  const omega = mode === "prismatic" ? [0, 0, 0] : [0, 0, 1];
  const v = mode === "prismatic" ? [1, 0, 0] : [0, mode === "revolute" ? 0 : pitch, 0];
  const travel = mode === "prismatic" ? thetaDeg / 45 : pitch * theta * 90;
  twistReadout.innerHTML = `<strong>Twist V = (omega, v)</strong>
    <p>omega = (${omega.join(", ")}), v = (${v.map(fmt).join(", ")}). ${mode === "prismatic" ? "No angular part: pure translation." : "The exponential of this twist creates a finite screw motion."}</p>`;

  const { ctx, w, h } = setupCanvas(twistCanvas);
  grid(ctx, w, h);
  const cx = w / 2;
  const cy = h / 2 + 25;
  ctx.strokeStyle = "#16202a";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - 190, cy);
  ctx.lineTo(cx + 190, cy);
  ctx.stroke();
  ctx.fillStyle = "#5a6875";
  ctx.fillText("screw axis", cx - 34, cy + 26);
  if (mode === "prismatic") {
    ctx.strokeStyle = "#2a8c6d";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(cx - 80, cy - 60);
    ctx.lineTo(cx + 80 + travel * 30, cy - 60);
    ctx.stroke();
  } else {
    ctx.strokeStyle = "#2364aa";
    ctx.lineWidth = 5;
    ctx.beginPath();
    for (let i = 0; i <= 90; i += 1) {
      const t = (i / 90) * theta * 2.2;
      const x = cx - 150 + i * 3.3;
      const y = cy - 52 + Math.sin(t) * 38 - travel * (i / 90);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.fillStyle = "#b84a3a";
    ctx.beginPath();
    ctx.arc(cx + 145, cy - 52 + Math.sin(theta * 2.2) * 38 - travel, 10, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawWrenchLab() {
  const moment = [0, 0, 2.1];
  const force = [1.2, 0.45, 0];
  const omega = [0, 0, 1.4];
  const velocity = [0.8, 0.1, 0];
  const power = moment[2] * omega[2] + force[0] * velocity[0] + force[1] * velocity[1];
  wrenchPower.textContent = `With m = (${moment.map(fmt).join(", ")}), f = (${force.map(fmt).join(", ")}), omega = (${omega.map(fmt).join(", ")}), and v = (${velocity.map(fmt).join(", ")}), power is ${fmt(power)}.`;
  const { ctx, w, h } = setupCanvas(wrenchCanvas);
  grid(ctx, w, h);
  const cx = w / 2;
  const cy = h / 2 + 20;
  ctx.fillStyle = "#d9e2ea";
  ctx.fillRect(cx - 82, cy - 48, 164, 96);
  ctx.strokeStyle = "#16202a";
  ctx.lineWidth = 3;
  ctx.strokeRect(cx - 82, cy - 48, 164, 96);
  ctx.strokeStyle = "#b84a3a";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx + force[0] * 85, cy - force[1] * 85);
  ctx.stroke();
  ctx.strokeStyle = "#2364aa";
  ctx.beginPath();
  ctx.arc(cx - 4, cy, 42, -0.3, 4.9);
  ctx.stroke();
  ctx.fillStyle = "#5a6875";
  ctx.fillText("force plus moment = wrench", cx - 84, cy + 82);
}

function renderChapter4Concepts() {
  const el = document.querySelector("#chapter4Concepts");
  el.innerHTML = chapter4Concepts.map((item, index) => `
    <article class="concept-card">
      <h3>${index + 1}. ${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function drawPlanarFk() {
  const t1 = Number(fkTheta1.value);
  const t2 = Number(fkTheta2.value);
  const t3 = Number(fkTheta3.value);
  fkTheta1Label.textContent = `${t1} deg`;
  fkTheta2Label.textContent = `${t2} deg`;
  fkTheta3Label.textContent = `${t3} deg`;
  const lengths = [105, 86, 64];
  const a1 = degToRad(t1);
  const a2 = degToRad(t1 + t2);
  const a3 = degToRad(t1 + t2 + t3);
  const pts = [{ x: 0, y: 0 }];
  [a1, a2, a3].forEach((angle, i) => {
    const prev = pts[pts.length - 1];
    pts.push({
      x: prev.x + lengths[i] * Math.cos(angle),
      y: prev.y + lengths[i] * Math.sin(angle)
    });
  });
  const end = pts[3];
  const phi = t1 + t2 + t3;
  fkReadout.innerHTML = `<strong>Planar 3R result</strong>
    <p>x = ${fmt(end.x)}, y = ${fmt(end.y)}, phi = ${phi} deg</p>
    <p>x = L1 cos(theta1) + L2 cos(theta1 + theta2) + L3 cos(theta1 + theta2 + theta3)</p>
    <p>y uses the same cumulative angles with sin.</p>`;

  const { ctx, w, h } = setupCanvas(fkCanvas);
  grid(ctx, w, h);
  const base = { x: w / 2 - 110, y: h / 2 + 80 };
  const mapped = pts.map((p) => ({ x: base.x + p.x, y: base.y - p.y }));
  ctx.strokeStyle = "rgba(35, 100, 170, 0.18)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(base.x, base.y, lengths.reduce((a, b) => a + b, 0), 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineCap = "round";
  ctx.lineWidth = 12;
  ["#2364aa", "#2a8c6d", "#d39b25"].forEach((color, i) => {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(mapped[i].x, mapped[i].y);
    ctx.lineTo(mapped[i + 1].x, mapped[i + 1].y);
    ctx.stroke();
  });
  mapped.forEach((p, i) => {
    ctx.fillStyle = i === 3 ? "#b84a3a" : "#fff";
    ctx.strokeStyle = "#16202a";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(p.x, p.y, i === 3 ? 9 : 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
  drawFrame2d(ctx, mapped[3].x, mapped[3].y, degToRad(phi), "{e}", 46);
}

function drawScrewAxisLab() {
  const omega = [0, 0, 1];
  const q = [1.2, 0.7, 0];
  const v = [q[1], -q[0], 0];
  screwReadout.innerHTML = `<strong>Revolute screw axis</strong>
    <p>omega = (${omega.join(", ")}), q = (${q.map(fmt).join(", ")}), v = -omega x q = (${v.map(fmt).join(", ")}).</p>
    <p>S = (omega, v) = (${omega.concat(v).map(fmt).join(", ")}).</p>`;
  const { ctx, w, h } = setupCanvas(screwCanvas);
  grid(ctx, w, h);
  const cx = w / 2;
  const cy = h / 2 + 24;
  const qx = cx + q[0] * 82;
  const qy = cy - q[1] * 82;
  ctx.strokeStyle = "#2364aa";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(qx, qy - 110);
  ctx.lineTo(qx, qy + 110);
  ctx.stroke();
  ctx.fillStyle = "#b84a3a";
  ctx.beginPath();
  ctx.arc(qx, qy, 9, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#16202a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(qx, qy);
  ctx.stroke();
  ctx.fillStyle = "#5a6875";
  ctx.fillText("point q on axis", qx + 12, qy - 8);
  ctx.fillText("omega points out of the page", qx - 72, qy + 128);
  ctx.strokeStyle = "#2a8c6d";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(qx, qy);
  ctx.lineTo(qx + v[0] * 54, qy - v[1] * 54);
  ctx.stroke();
}

function renderPoeSteps() {
  const steps = [
    ["1. Attach frames", "Choose a fixed space frame {s} and an end-effector frame {b}. Define the home pose M when theta = 0."],
    ["2. Find each joint screw", "For every revolute or prismatic joint, write the screw axis Si in the space frame at home."],
    ["3. Exponentiate joint motion", "Use e^[Si]thetai to turn each joint coordinate into a rigid-body transform."],
    ["4. Multiply in chain order", "Compose e^[S1]theta1 through e^[Sn]thetan. The order follows the serial chain."],
    ["5. Apply home pose", "Postmultiply by M to place the end-effector frame at its home offset after all joint motions."],
    ["6. Cross-check body form", "Optionally convert to body screw axes Bi = [Ad M^-1]Si and use T = M e^[B1]theta1 ... e^[Bn]thetan."]
  ];
  document.querySelector("#poeSteps").innerHTML = steps.map((step) => `
    <article class="pipe-step poe-step">
      <b>${step[0].split(".")[0]}</b>
      <div><h3>${step[0]}</h3><p>${step[1]}</p></div>
    </article>
  `).join("");
}

function renderChapter5Concepts() {
  const el = document.querySelector("#chapter5Concepts");
  el.innerHTML = chapter5Concepts.map((item, index) => `
    <article class="concept-card">
      <h3>${index + 1}. ${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function getJacobianState() {
  const t1 = Number(jacTheta1.value);
  const t2 = Number(jacTheta2.value);
  const r1 = Number(jacRate1.value) / 100;
  const r2 = Number(jacRate2.value) / 100;
  const l1 = 128;
  const l2 = 102;
  const a1 = degToRad(t1);
  const a12 = degToRad(t1 + t2);
  const p0 = { x: 0, y: 0 };
  const p1 = { x: l1 * Math.cos(a1), y: l1 * Math.sin(a1) };
  const p2 = { x: p1.x + l2 * Math.cos(a12), y: p1.y + l2 * Math.sin(a12) };
  const j = [
    [-l1 * Math.sin(a1) - l2 * Math.sin(a12), -l2 * Math.sin(a12)],
    [l1 * Math.cos(a1) + l2 * Math.cos(a12), l2 * Math.cos(a12)]
  ];
  const v = {
    x: j[0][0] * r1 + j[0][1] * r2,
    y: j[1][0] * r1 + j[1][1] * r2
  };
  const det = j[0][0] * j[1][1] - j[0][1] * j[1][0];
  return { t1, t2, r1, r2, l1, l2, p0, p1, p2, j, v, det };
}

function drawJacobianArm(ctx, w, h, state, options = {}) {
  const base = { x: w / 2 - 80, y: h / 2 + 72 };
  const pts = [state.p0, state.p1, state.p2].map((p) => ({ x: base.x + p.x, y: base.y - p.y }));
  ctx.strokeStyle = "rgba(35, 100, 170, 0.16)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(base.x, base.y, state.l1 + state.l2, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineCap = "round";
  ctx.lineWidth = 12;
  ctx.strokeStyle = "#2364aa";
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  ctx.lineTo(pts[1].x, pts[1].y);
  ctx.stroke();
  ctx.strokeStyle = "#2a8c6d";
  ctx.beginPath();
  ctx.moveTo(pts[1].x, pts[1].y);
  ctx.lineTo(pts[2].x, pts[2].y);
  ctx.stroke();
  pts.forEach((p, i) => {
    ctx.fillStyle = i === 2 ? "#b84a3a" : "#fff";
    ctx.strokeStyle = "#16202a";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(p.x, p.y, i === 2 ? 9 : 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
  if (options.velocity) {
    ctx.strokeStyle = "#b84a3a";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(pts[2].x, pts[2].y);
    ctx.lineTo(pts[2].x + state.v.x * 0.42, pts[2].y - state.v.y * 0.42);
    ctx.stroke();
    ctx.fillStyle = "#5a6875";
    ctx.fillText("end-effector velocity", pts[2].x + 10, pts[2].y - 18);
  }
  return pts;
}

function drawJacobianLab() {
  const s = getJacobianState();
  jacTheta1Label.textContent = `${s.t1} deg`;
  jacTheta2Label.textContent = `${s.t2} deg`;
  jacRate1Label.textContent = fmt(s.r1);
  jacRate2Label.textContent = fmt(s.r2);
  jacobianReadout.innerHTML = `<strong>Planar position Jacobian</strong>${matrixHtml(s.j.map((row) => row.map(fmt)))}
    <p>thetadot = (${fmt(s.r1)}, ${fmt(s.r2)}) gives v = (${fmt(s.v.x)}, ${fmt(s.v.y)}).</p>
    <p>det(J) = ${fmt(s.det)}. Near zero means the arm is close to a singularity.</p>`;
  const { ctx, w, h } = setupCanvas(jacobianCanvas);
  grid(ctx, w, h);
  drawJacobianArm(ctx, w, h, s, { velocity: true });
}

function drawStaticsLab() {
  const s = getJacobianState();
  const fx = Number(forceX.value) / 100;
  const fy = Number(forceY.value) / 100;
  forceXLabel.textContent = fmt(fx);
  forceYLabel.textContent = fmt(fy);
  const tau1 = s.j[0][0] * fx + s.j[1][0] * fy;
  const tau2 = s.j[0][1] * fx + s.j[1][1] * fy;
  staticsReadout.innerHTML = `<strong>tau = J^T F</strong>
    <p>F = (${fmt(fx)}, ${fmt(fy)}) gives tau = (${fmt(tau1)}, ${fmt(tau2)}).</p>
    <p>The transpose appears because virtual power must match: F dot v = tau dot thetadot.</p>`;
  const { ctx, w, h } = setupCanvas(staticsCanvas);
  grid(ctx, w, h);
  const pts = drawJacobianArm(ctx, w, h, s);
  const tip = pts[2];
  ctx.strokeStyle = "#b84a3a";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(tip.x, tip.y);
  ctx.lineTo(tip.x + fx * 58, tip.y - fy * 58);
  ctx.stroke();
  ctx.fillStyle = "#5a6875";
  ctx.fillText("endpoint force F", tip.x + 10, tip.y - 20);
}

function manipulabilityAxes(j) {
  const a = j[0][0] * j[0][0] + j[0][1] * j[0][1];
  const b = j[0][0] * j[1][0] + j[0][1] * j[1][1];
  const d = j[1][0] * j[1][0] + j[1][1] * j[1][1];
  const tr = a + d;
  const disc = Math.sqrt(Math.max(0, (a - d) * (a - d) + 4 * b * b));
  const lambda1 = (tr + disc) / 2;
  const lambda2 = (tr - disc) / 2;
  const angle = Math.atan2(lambda1 - a, b || 0.0001);
  return { major: Math.sqrt(Math.max(lambda1, 0)), minor: Math.sqrt(Math.max(lambda2, 0)), angle };
}

function drawManipulabilityLab() {
  const s = getJacobianState();
  const axes = manipulabilityAxes(s.j);
  const condition = axes.minor < 0.001 ? "singular" : fmt(axes.major / axes.minor);
  manipReadout.innerHTML = `<strong>Velocity manipulability</strong>
    <p>major axis = ${fmt(axes.major)}, minor axis = ${fmt(axes.minor)}, condition ratio = ${condition}.</p>
    <p>det(J) = ${fmt(s.det)}. The ellipse collapses when the Jacobian loses rank.</p>`;
  const { ctx, w, h } = setupCanvas(manipCanvas);
  grid(ctx, w, h);
  const pts = drawJacobianArm(ctx, w, h, s);
  const tip = pts[2];
  const scale = 0.56;
  ctx.save();
  ctx.translate(tip.x, tip.y);
  ctx.rotate(-axes.angle);
  ctx.strokeStyle = "#b84a3a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(0, 0, Math.max(4, axes.major * scale), Math.max(2, axes.minor * scale), 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
  ctx.fillStyle = "#5a6875";
  ctx.fillText("velocity manipulability ellipse", 28, 34);
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
  if (active === "3") {
    drawPlaneMotion();
    drawRotationLab();
    drawAngularVelocity();
    drawSe3Lab();
    drawTwistLab();
    drawWrenchLab();
  }
  if (active === "4") {
    drawPlanarFk();
    drawScrewAxisLab();
  }
  if (active === "5") {
    drawJacobianLab();
    drawStaticsLab();
    drawManipulabilityLab();
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
  ],
  "3": [
    ["Spine", "#chapter3-spine"],
    ["Plane", "#chapter3-plane"],
    ["SO(3)", "#chapter3-rotations"],
    ["Velocity", "#chapter3-angular"],
    ["SE(3)", "#chapter3-se3"],
    ["Twists", "#chapter3-twists"],
    ["Wrenches", "#chapter3-wrenches"],
    ["Check", "#chapter3-check"]
  ],
  "4": [
    ["Spine", "#chapter4-spine"],
    ["3R FK", "#chapter4-planar"],
    ["Screws", "#chapter4-screws"],
    ["PoE", "#chapter4-poe"],
    ["Body", "#chapter4-body"],
    ["URDF", "#chapter4-urdf"],
    ["Check", "#chapter4-check"]
  ],
  "5": [
    ["Spine", "#chapter5-spine"],
    ["Jacobian", "#chapter5-jacobian"],
    ["Frames", "#chapter5-space-body"],
    ["Statics", "#chapter5-statics"],
    ["Singularities", "#chapter5-singularity"],
    ["Check", "#chapter5-check"]
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
planeX.addEventListener("input", drawPlaneMotion);
planeY.addEventListener("input", drawPlaneMotion);
planeTheta.addEventListener("input", drawPlaneMotion);
rotAxis.addEventListener("change", drawRotationLab);
rotAngle.addEventListener("input", drawRotationLab);
se3X.addEventListener("input", drawSe3Lab);
se3Y.addEventListener("input", drawSe3Lab);
se3Yaw.addEventListener("input", drawSe3Lab);
twistMode.addEventListener("change", drawTwistLab);
twistTheta.addEventListener("input", drawTwistLab);
twistPitch.addEventListener("input", drawTwistLab);
fkTheta1.addEventListener("input", drawPlanarFk);
fkTheta2.addEventListener("input", drawPlanarFk);
fkTheta3.addEventListener("input", drawPlanarFk);
[jacTheta1, jacTheta2, jacRate1, jacRate2].forEach((input) => {
  input.addEventListener("input", () => {
    drawJacobianLab();
    drawStaticsLab();
    drawManipulabilityLab();
  });
});
[forceX, forceY].forEach((input) => input.addEventListener("input", drawStaticsLab));
document.querySelectorAll(".singularity-preset").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.singularity === "straight") {
      jacTheta1.value = "0";
      jacTheta2.value = "0";
    } else if (button.dataset.singularity === "folded") {
      jacTheta1.value = "0";
      jacTheta2.value = "180";
    } else {
      jacTheta1.value = "35";
      jacTheta2.value = "-48";
    }
    drawJacobianLab();
    drawStaticsLab();
    drawManipulabilityLab();
  });
});
window.addEventListener("resize", redrawActiveChapter);

renderChapters();
renderMechanism();
renderPipeline();
renderQuiz();
renderChapter2Concepts();
renderJointTable();
renderTaskCards();
renderGenericQuiz("#chapter2Quiz", chapter2QuizItems, "Not quite. Revisit the concept card above, then compare this option to the definition from Chapter 2.");
renderChapter3Concepts();
renderGenericQuiz("#chapter3Quiz", chapter3QuizItems, "Not quite. Chapter 3 is careful about what each object represents; check the nearby lab and try again.");
renderChapter4Concepts();
renderPoeSteps();
renderGenericQuiz("#chapter4Quiz", chapter4QuizItems, "Not quite. Chapter 4 is about mapping known joint values forward to a pose; compare this with the PoE recipe above.");
renderChapter5Concepts();
renderGenericQuiz("#chapter5Quiz", chapter5QuizItems, "Not quite. Return to the Jacobian map and ask whether this option describes motion, force, or singularity behavior.");
setChapter("1");
drawArm();
