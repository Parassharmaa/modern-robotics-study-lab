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

const chapter6Concepts = [
  {
    title: "Inverse kinematics problem",
    text: "Given a desired end-effector pose Xd, find joint coordinates theta such that T(theta) matches Xd."
  },
  {
    title: "Multiple solutions",
    text: "Many robots have several IK branches, such as elbow-up and elbow-down postures reaching the same target."
  },
  {
    title: "No solution",
    text: "Targets outside the workspace or incompatible with orientation limits have no exact joint solution."
  },
  {
    title: "Analytic IK",
    text: "Special robot geometries, such as PUMA-type or Stanford-type arms, can be solved by geometric/algebraic decomposition."
  },
  {
    title: "Newton-Raphson IK",
    text: "General numerical IK repeatedly linearizes error with the Jacobian and applies a joint correction."
  },
  {
    title: "Error twist",
    text: "For spatial robots, pose error is represented as a twist-like quantity using the matrix logarithm from Chapter 3."
  },
  {
    title: "Inverse velocity kinematics",
    text: "The linear subproblem V = J thetadot is solved directly, by pseudoinverse, or with damping near singularities."
  },
  {
    title: "Closed-loop note",
    text: "Closed chains add loop-closure equations and passive-joint compatibility to the IK problem."
  }
];

const chapter6QuizItems = [
  {
    q: "What does inverse kinematics solve for?",
    answers: [
      "Joint coordinates that realize a desired end-effector pose.",
      "The mass of every link.",
      "Only endpoint velocity from joint velocity."
    ],
    correct: 0,
    note: "Yes. IK reverses the forward kinematics question."
  },
  {
    q: "Why can IK have multiple answers?",
    answers: [
      "Different robot postures can place the end-effector at the same pose.",
      "Forward kinematics is random.",
      "The robot must be singular."
    ],
    correct: 0,
    note: "Right. Elbow-up and elbow-down branches are the classic planar example."
  },
  {
    q: "What does numerical IK use at each correction step?",
    answers: [
      "A Jacobian-based linearization of the pose error.",
      "Only the URDF text.",
      "A new motor model."
    ],
    correct: 0,
    note: "Exactly. Newton-style IK updates theta through a local Jacobian solve."
  },
  {
    q: "What is inverse velocity kinematics?",
    answers: [
      "Solving V = J thetadot for joint rates.",
      "Computing T(theta) from theta.",
      "Counting degrees of freedom."
    ],
    correct: 0,
    note: "Good. It is the linear subproblem inside many IK methods."
  },
  {
    q: "What is a practical issue near singularities?",
    answers: [
      "Small task corrections may require very large joint corrections.",
      "The forward kinematics disappears.",
      "The robot gains extra motors."
    ],
    correct: 0,
    note: "Yes. Damping and step limits are practical ways to keep numerical IK calm."
  }
];

const chapter7Concepts = [
  {
    title: "Closed chains",
    text: "Links form one or more loops, so joint variables and platform pose must satisfy loop-closure constraints."
  },
  {
    title: "Parallel mechanism",
    text: "Multiple limbs connect a base to a moving platform, often giving high stiffness and precision."
  },
  {
    title: "Inverse kinematics",
    text: "For many parallel robots, inverse kinematics is direct: platform pose determines each limb length or joint value."
  },
  {
    title: "Forward kinematics",
    text: "Forward kinematics can be harder: actuator lengths may correspond to several possible platform poses."
  },
  {
    title: "Differential kinematics",
    text: "Differentiated loop constraints relate actuator rates and platform twist."
  },
  {
    title: "Constraint Jacobians",
    text: "Closed-chain velocity equations often appear as matrices multiplying actuator rates and platform velocities."
  },
  {
    title: "Singularities",
    text: "Closed chains have several singularity types, including loss of controllable motion and gain of uncontrolled motion."
  },
  {
    title: "Chapter 7 bridge",
    text: "The chapter prepares for dynamics by making constraint forces and passive joints explicit."
  }
];

const chapter7QuizItems = [
  {
    q: "What makes a mechanism closed-chain?",
    answers: [
      "Its links form one or more kinematic loops.",
      "It has no sensors.",
      "Its joints must all be prismatic."
    ],
    correct: 0,
    note: "Yes. Loop closure is the defining feature."
  },
  {
    q: "Why can parallel robot inverse kinematics be easier than forward kinematics?",
    answers: [
      "A platform pose can directly determine each limb length, while lengths may imply multiple poses.",
      "Parallel robots ignore geometry.",
      "Forward kinematics is never defined."
    ],
    correct: 0,
    note: "Right. This flips the intuition from many serial arms."
  },
  {
    q: "What does differential closed-chain kinematics relate?",
    answers: [
      "Actuator rates and platform velocity through differentiated constraints.",
      "Only link masses and inertias.",
      "Only task-space obstacles."
    ],
    correct: 0,
    note: "Exactly. Differentiate the loop equations and you get velocity constraints."
  },
  {
    q: "What is a constraint singularity?",
    answers: [
      "A loss of constraint rank that may allow platform motion even with locked actuators.",
      "A missing URDF tag.",
      "A configuration where all links vanish."
    ],
    correct: 0,
    note: "Good. Closed chains can gain unwanted motion at certain singularities."
  },
  {
    q: "What is the Stewart-Gough platform?",
    answers: [
      "A spatial parallel platform with six extensible legs.",
      "A planar serial 2R arm.",
      "A mobile robot wheel model."
    ],
    correct: 0,
    note: "Yes. It is the classic six-degree spatial parallel mechanism."
  }
];

const chapter8Concepts = [
  { title: "Lagrangian formulation", text: "Derives equations of motion from kinetic and potential energy using generalized coordinates." },
  { title: "Mass matrix", text: "M(theta) maps joint accelerations to inertial torques and depends on configuration." },
  { title: "Velocity terms", text: "Coriolis and centripetal effects appear when moving joints change the kinetic-energy coupling." },
  { title: "Gravity terms", text: "Gravity torques come from the gradient of potential energy." },
  { title: "Single rigid body dynamics", text: "Chapter 8 relates classical rigid-body dynamics to twist-wrench notation." },
  { title: "Newton-Euler recursion", text: "An efficient outward/inward algorithm for inverse dynamics of open chains." },
  { title: "Forward dynamics", text: "Solves for acceleration from applied torque by inverting the dynamic equations." },
  { title: "Actuation and friction", text: "Motors, gear ratios, apparent rotor inertia, friction, and flexibility shape real joint effort." }
];

const chapter8QuizItems = [
  { q: "What does inverse dynamics compute?", answers: ["Joint torques from desired motion.", "Joint angles from desired pose.", "Only link colors."], correct: 0, note: "Yes. Inverse dynamics maps motion and loads to required effort." },
  { q: "What does the mass matrix multiply?", answers: ["Joint accelerations.", "Only endpoint position.", "URDF XML tags."], correct: 0, note: "Right. M(theta) thetaddot is the inertial acceleration term." },
  { q: "Why does M(theta) change with configuration?", answers: ["The links' effective inertia about joints changes as the robot bends.", "Mass disappears at some angles.", "Gravity changes the link lengths."], correct: 0, note: "Exactly. Configuration changes how mass is distributed relative to joint motion." },
  { q: "What is the Newton-Euler algorithm good for?", answers: ["Efficient recursive inverse dynamics.", "Replacing all kinematics.", "Counting workspace topology."], correct: 0, note: "Good. It computes link motion outward and forces inward." },
  { q: "Why can gearing add apparent inertia?", answers: ["Rotor inertia is reflected through the gear ratio squared.", "Gears remove all friction.", "The motor mass becomes zero."], correct: 0, note: "Yes. High ratios can make small rotor inertia matter a lot at the joint." }
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
const ikTargetX = document.querySelector("#ikTargetX");
const ikTargetY = document.querySelector("#ikTargetY");
const ikTargetXLabel = document.querySelector("#ikTargetXLabel");
const ikTargetYLabel = document.querySelector("#ikTargetYLabel");
const ikBranch = document.querySelector("#ikBranch");
const analyticIkReadout = document.querySelector("#analyticIkReadout");
const analyticIkCanvas = document.querySelector("#analyticIkCanvas");
const numIkTheta1 = document.querySelector("#numIkTheta1");
const numIkTheta2 = document.querySelector("#numIkTheta2");
const numIkIterations = document.querySelector("#numIkIterations");
const numIkTheta1Label = document.querySelector("#numIkTheta1Label");
const numIkTheta2Label = document.querySelector("#numIkTheta2Label");
const numIkIterationsLabel = document.querySelector("#numIkIterationsLabel");
const numericIkReadout = document.querySelector("#numericIkReadout");
const numericIkCanvas = document.querySelector("#numericIkCanvas");
const closedX = document.querySelector("#closedX");
const closedY = document.querySelector("#closedY");
const closedPhi = document.querySelector("#closedPhi");
const closedXLabel = document.querySelector("#closedXLabel");
const closedYLabel = document.querySelector("#closedYLabel");
const closedPhiLabel = document.querySelector("#closedPhiLabel");
const closedReadout = document.querySelector("#closedReadout");
const closedCanvas = document.querySelector("#closedCanvas");
const closedVx = document.querySelector("#closedVx");
const closedVy = document.querySelector("#closedVy");
const closedOmega = document.querySelector("#closedOmega");
const closedVxLabel = document.querySelector("#closedVxLabel");
const closedVyLabel = document.querySelector("#closedVyLabel");
const closedOmegaLabel = document.querySelector("#closedOmegaLabel");
const closedVelocityReadout = document.querySelector("#closedVelocityReadout");
const closedVelocityCanvas = document.querySelector("#closedVelocityCanvas");
const dynTheta1 = document.querySelector("#dynTheta1");
const dynTheta2 = document.querySelector("#dynTheta2");
const dynRate1 = document.querySelector("#dynRate1");
const dynRate2 = document.querySelector("#dynRate2");
const dynAccel1 = document.querySelector("#dynAccel1");
const dynAccel2 = document.querySelector("#dynAccel2");
const dynTheta1Label = document.querySelector("#dynTheta1Label");
const dynTheta2Label = document.querySelector("#dynTheta2Label");
const dynRate1Label = document.querySelector("#dynRate1Label");
const dynRate2Label = document.querySelector("#dynRate2Label");
const dynAccel1Label = document.querySelector("#dynAccel1Label");
const dynAccel2Label = document.querySelector("#dynAccel2Label");
const dynamicsReadout = document.querySelector("#dynamicsReadout");
const dynamicsCanvas = document.querySelector("#dynamicsCanvas");
const gearRatio = document.querySelector("#gearRatio");
const rotorInertia = document.querySelector("#rotorInertia");
const viscousFriction = document.querySelector("#viscousFriction");
const gearRatioLabel = document.querySelector("#gearRatioLabel");
const rotorInertiaLabel = document.querySelector("#rotorInertiaLabel");
const viscousFrictionLabel = document.querySelector("#viscousFrictionLabel");
const actuationReadout = document.querySelector("#actuationReadout");
const actuationCanvas = document.querySelector("#actuationCanvas");

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

function renderChapter6Concepts() {
  const el = document.querySelector("#chapter6Concepts");
  el.innerHTML = chapter6Concepts.map((item, index) => `
    <article class="concept-card">
      <h3>${index + 1}. ${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function solve2rIk(x, y, elbowSign) {
  const l1 = 128;
  const l2 = 102;
  const r2 = x * x + y * y;
  const c2Raw = (r2 - l1 * l1 - l2 * l2) / (2 * l1 * l2);
  const reachable = c2Raw >= -1 && c2Raw <= 1;
  const c2 = Math.max(-1, Math.min(1, c2Raw));
  const s2 = elbowSign * Math.sqrt(Math.max(0, 1 - c2 * c2));
  const theta2 = Math.atan2(s2, c2);
  const theta1 = Math.atan2(y, x) - Math.atan2(l2 * s2, l1 + l2 * c2);
  return { l1, l2, reachable, theta1, theta2, c2Raw };
}

function fk2r(theta1, theta2, l1 = 128, l2 = 102) {
  const p1 = { x: l1 * Math.cos(theta1), y: l1 * Math.sin(theta1) };
  const p2 = { x: p1.x + l2 * Math.cos(theta1 + theta2), y: p1.y + l2 * Math.sin(theta1 + theta2) };
  return { p1, p2 };
}

function draw2rArmOnCanvas(ctx, w, h, theta1, theta2, options = {}) {
  const l1 = 128;
  const l2 = 102;
  const fk = fk2r(theta1, theta2, l1, l2);
  const base = { x: w / 2, y: h / 2 + 54 };
  const pts = [
    { x: base.x, y: base.y },
    { x: base.x + fk.p1.x, y: base.y - fk.p1.y },
    { x: base.x + fk.p2.x, y: base.y - fk.p2.y }
  ];
  ctx.strokeStyle = "rgba(35, 100, 170, 0.16)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(base.x, base.y, l1 + l2, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineCap = "round";
  ctx.lineWidth = 12;
  ctx.strokeStyle = options.muted ? "#8aa8c8" : "#2364aa";
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  ctx.lineTo(pts[1].x, pts[1].y);
  ctx.stroke();
  ctx.strokeStyle = options.muted ? "#93baa9" : "#2a8c6d";
  ctx.beginPath();
  ctx.moveTo(pts[1].x, pts[1].y);
  ctx.lineTo(pts[2].x, pts[2].y);
  ctx.stroke();
  pts.forEach((p, i) => {
    ctx.fillStyle = i === 2 ? "#b84a3a" : "#fff";
    ctx.strokeStyle = "#16202a";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(p.x, p.y, i === 2 ? 8 : 11, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
  return { base, pts, tip: fk.p2 };
}

function drawAnalyticIkLab() {
  const x = Number(ikTargetX.value);
  const y = Number(ikTargetY.value);
  const elbowSign = ikBranch.value === "up" ? 1 : -1;
  const sol = solve2rIk(x, y, elbowSign);
  ikTargetXLabel.textContent = String(x);
  ikTargetYLabel.textContent = String(y);
  const t1 = (sol.theta1 * 180) / Math.PI;
  const t2 = (sol.theta2 * 180) / Math.PI;
  analyticIkReadout.innerHTML = `<strong>Analytic 2R solution</strong>
    <p>${sol.reachable ? "Reachable target." : "Outside exact workspace; showing nearest clamped branch."}</p>
    <p>theta1 = ${fmt(t1)} deg, theta2 = ${fmt(t2)} deg, branch = ${ikBranch.value}.</p>
    <p>cos(theta2) raw = ${fmt(sol.c2Raw)}. Values outside [-1, 1] mean no exact solution.</p>`;
  const { ctx, w, h } = setupCanvas(analyticIkCanvas);
  grid(ctx, w, h);
  const drawn = draw2rArmOnCanvas(ctx, w, h, sol.theta1, sol.theta2);
  const tx = drawn.base.x + x;
  const ty = drawn.base.y - y;
  ctx.strokeStyle = sol.reachable ? "#b84a3a" : "#d39b25";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(tx, ty, 12, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(tx - 22, ty);
  ctx.lineTo(tx + 22, ty);
  ctx.moveTo(tx, ty - 22);
  ctx.lineTo(tx, ty + 22);
  ctx.stroke();
  ctx.fillStyle = "#5a6875";
  ctx.fillText("target", tx + 16, ty - 14);
}

function jacobian2r(theta1, theta2, l1 = 128, l2 = 102) {
  const a12 = theta1 + theta2;
  return [
    [-l1 * Math.sin(theta1) - l2 * Math.sin(a12), -l2 * Math.sin(a12)],
    [l1 * Math.cos(theta1) + l2 * Math.cos(a12), l2 * Math.cos(a12)]
  ];
}

function runNumericIk() {
  const target = { x: Number(ikTargetX.value), y: Number(ikTargetY.value) };
  let t1 = degToRad(Number(numIkTheta1.value));
  let t2 = degToRad(Number(numIkTheta2.value));
  const iterations = Number(numIkIterations.value);
  const path = [];
  for (let i = 0; i <= iterations; i += 1) {
    const fk = fk2r(t1, t2);
    const err = { x: target.x - fk.p2.x, y: target.y - fk.p2.y };
    path.push({ t1, t2, tip: fk.p2, err });
    if (i === iterations) break;
    const j = jacobian2r(t1, t2);
    const det = j[0][0] * j[1][1] - j[0][1] * j[1][0];
    if (Math.abs(det) < 0.001) break;
    const inv = [
      [j[1][1] / det, -j[0][1] / det],
      [-j[1][0] / det, j[0][0] / det]
    ];
    const stepScale = 0.72;
    const d1 = (inv[0][0] * err.x + inv[0][1] * err.y) * stepScale;
    const d2 = (inv[1][0] * err.x + inv[1][1] * err.y) * stepScale;
    const maxStep = 0.55;
    t1 += Math.max(-maxStep, Math.min(maxStep, d1));
    t2 += Math.max(-maxStep, Math.min(maxStep, d2));
  }
  return { target, path };
}

function drawNumericIkLab() {
  const start1 = Number(numIkTheta1.value);
  const start2 = Number(numIkTheta2.value);
  const iterations = Number(numIkIterations.value);
  numIkTheta1Label.textContent = `${start1} deg`;
  numIkTheta2Label.textContent = `${start2} deg`;
  numIkIterationsLabel.textContent = String(iterations);
  const result = runNumericIk();
  const last = result.path[result.path.length - 1];
  const errNorm = Math.hypot(last.err.x, last.err.y);
  numericIkReadout.innerHTML = `<strong>Newton-style IK path</strong>
    <p>final theta = (${fmt((last.t1 * 180) / Math.PI)} deg, ${fmt((last.t2 * 180) / Math.PI)} deg)</p>
    <p>remaining position error = ${fmt(errNorm)} after ${result.path.length - 1} correction steps.</p>`;
  const { ctx, w, h } = setupCanvas(numericIkCanvas);
  grid(ctx, w, h);
  const base = { x: w / 2, y: h / 2 + 54 };
  ctx.strokeStyle = "#d39b25";
  ctx.lineWidth = 3;
  ctx.beginPath();
  result.path.forEach((p, i) => {
    const x = base.x + p.tip.x;
    const y = base.y - p.tip.y;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();
  result.path.forEach((p, i) => {
    ctx.fillStyle = i === result.path.length - 1 ? "#b84a3a" : "#d39b25";
    ctx.beginPath();
    ctx.arc(base.x + p.tip.x, base.y - p.tip.y, i === 0 ? 5 : 4, 0, Math.PI * 2);
    ctx.fill();
  });
  draw2rArmOnCanvas(ctx, w, h, last.t1, last.t2);
  const tx = base.x + result.target.x;
  const ty = base.y - result.target.y;
  ctx.strokeStyle = "#b84a3a";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(tx, ty, 12, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = "#5a6875";
  ctx.fillText("iteration trail", 28, 34);
}

function renderChapter7Concepts() {
  const el = document.querySelector("#chapter7Concepts");
  el.innerHTML = chapter7Concepts.map((item, index) => `
    <article class="concept-card">
      <h3>${index + 1}. ${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function closedChainState() {
  const x = Number(closedX.value);
  const y = Number(closedY.value);
  const phi = degToRad(Number(closedPhi.value));
  const base = [
    { x: -170, y: -92 },
    { x: 170, y: -92 },
    { x: 0, y: 156 }
  ];
  const local = [
    { x: -58, y: -42 },
    { x: 58, y: -42 },
    { x: 0, y: 68 }
  ];
  const c = Math.cos(phi);
  const s = Math.sin(phi);
  const platform = local.map((p) => ({
    x: x + c * p.x - s * p.y,
    y: y + s * p.x + c * p.y,
    local: p
  }));
  const legs = platform.map((p, i) => {
    const dx = p.x - base[i].x;
    const dy = p.y - base[i].y;
    const length = Math.hypot(dx, dy);
    return { base: base[i], platform: p, dx, dy, length, ux: dx / length, uy: dy / length };
  });
  return { x, y, phi, base, local, platform, legs };
}

function drawClosedPlatform(ctx, w, h, state, options = {}) {
  const origin = { x: w / 2, y: h / 2 + 20 };
  function map(p) {
    return { x: origin.x + p.x, y: origin.y - p.y };
  }
  ctx.lineCap = "round";
  state.legs.forEach((leg, i) => {
    const a = map(leg.base);
    const b = map(leg.platform);
    ctx.strokeStyle = options.rates ? ["#2364aa", "#2a8c6d", "#d39b25"][i] : "#2364aa";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#16202a";
    ctx.lineWidth = 3;
    [a, b].forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
  });
  const pts = state.platform.map(map);
  ctx.fillStyle = "rgba(42, 140, 109, 0.15)";
  ctx.strokeStyle = "#2a8c6d";
  ctx.lineWidth = 4;
  ctx.beginPath();
  pts.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  const center = map({ x: state.x, y: state.y });
  drawFrame2d(ctx, center.x, center.y, state.phi, "{p}", 44);
  return { origin, map };
}

function drawClosedChainLab() {
  const state = closedChainState();
  closedXLabel.textContent = String(state.x);
  closedYLabel.textContent = String(state.y);
  closedPhiLabel.textContent = `${Math.round((state.phi * 180) / Math.PI)} deg`;
  closedReadout.innerHTML = `<strong>Inverse kinematics: leg lengths</strong>
    <p>rho = (${state.legs.map((leg) => fmt(leg.length)).join(", ")}).</p>
    <p>Each length is the distance from a fixed base anchor to a moving platform anchor.</p>`;
  const { ctx, w, h } = setupCanvas(closedCanvas);
  grid(ctx, w, h);
  drawClosedPlatform(ctx, w, h, state);
}

function closedVelocityState() {
  const state = closedChainState();
  const vx = Number(closedVx.value) / 100;
  const vy = Number(closedVy.value) / 100;
  const omega = Number(closedOmega.value) / 100;
  const rates = state.legs.map((leg) => {
    const r = leg.platform.local;
    const anchorVelocity = {
      x: vx - omega * r.y,
      y: vy + omega * r.x
    };
    return leg.ux * anchorVelocity.x + leg.uy * anchorVelocity.y;
  });
  return { ...state, vx, vy, omega, rates };
}

function drawClosedVelocityLab() {
  const state = closedVelocityState();
  closedVxLabel.textContent = fmt(state.vx);
  closedVyLabel.textContent = fmt(state.vy);
  closedOmegaLabel.textContent = fmt(state.omega);
  closedVelocityReadout.innerHTML = `<strong>Differential inverse kinematics</strong>
    <p>platform velocity = (${fmt(state.vx)}, ${fmt(state.vy)}, ${fmt(state.omega)})</p>
    <p>leg rates rhodot = (${state.rates.map(fmt).join(", ")}).</p>
    <p>Each rate is a projection onto its leg axis.</p>`;
  const { ctx, w, h } = setupCanvas(closedVelocityCanvas);
  grid(ctx, w, h);
  const drawn = drawClosedPlatform(ctx, w, h, state, { rates: true });
  state.legs.forEach((leg, i) => {
    const p = drawn.map(leg.platform);
    ctx.strokeStyle = ["#2364aa", "#2a8c6d", "#d39b25"][i];
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.x + state.rates[i] * 44 * leg.ux, p.y - state.rates[i] * 44 * leg.uy);
    ctx.stroke();
  });
  const center = drawn.map({ x: state.x, y: state.y });
  ctx.strokeStyle = "#b84a3a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(center.x, center.y);
  ctx.lineTo(center.x + state.vx * 80, center.y - state.vy * 80);
  ctx.stroke();
  ctx.fillStyle = "#5a6875";
  ctx.fillText("platform velocity and projected leg rates", 28, 34);
}

function renderChapter8Concepts() {
  const el = document.querySelector("#chapter8Concepts");
  el.innerHTML = chapter8Concepts.map((item, index) => `
    <article class="concept-card">
      <h3>${index + 1}. ${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function getDynamicsState() {
  const q1 = degToRad(Number(dynTheta1.value));
  const q2 = degToRad(Number(dynTheta2.value));
  const qd1 = Number(dynRate1.value) / 100;
  const qd2 = Number(dynRate2.value) / 100;
  const qdd1 = Number(dynAccel1.value) / 100;
  const qdd2 = Number(dynAccel2.value) / 100;
  const l1 = 1.2;
  const l2 = 0.95;
  const m1 = 2.0;
  const m2 = 1.4;
  const lc1 = l1 / 2;
  const lc2 = l2 / 2;
  const I1 = 0.18;
  const I2 = 0.10;
  const g = 9.81;
  const c2 = Math.cos(q2);
  const s2 = Math.sin(q2);
  const M = [
    [I1 + I2 + m1 * lc1 * lc1 + m2 * (l1 * l1 + lc2 * lc2 + 2 * l1 * lc2 * c2), I2 + m2 * (lc2 * lc2 + l1 * lc2 * c2)],
    [I2 + m2 * (lc2 * lc2 + l1 * lc2 * c2), I2 + m2 * lc2 * lc2]
  ];
  const h = -m2 * l1 * lc2 * s2;
  const c = [
    h * (2 * qd1 * qd2 + qd2 * qd2),
    -h * qd1 * qd1
  ];
  const grav = [
    (m1 * lc1 + m2 * l1) * g * Math.cos(q1) + m2 * lc2 * g * Math.cos(q1 + q2),
    m2 * lc2 * g * Math.cos(q1 + q2)
  ];
  const friction = [0.12 * qd1 + 0.18 * Math.sign(qd1), 0.08 * qd2 + 0.12 * Math.sign(qd2)];
  const inertial = [M[0][0] * qdd1 + M[0][1] * qdd2, M[1][0] * qdd1 + M[1][1] * qdd2];
  const tau = [inertial[0] + c[0] + grav[0] + friction[0], inertial[1] + c[1] + grav[1] + friction[1]];
  return { q1, q2, qd1, qd2, qdd1, qdd2, l1, l2, M, c, grav, friction, inertial, tau };
}

function drawDynamicsLab() {
  const s = getDynamicsState();
  dynTheta1Label.textContent = `${Number(dynTheta1.value)} deg`;
  dynTheta2Label.textContent = `${Number(dynTheta2.value)} deg`;
  dynRate1Label.textContent = fmt(s.qd1);
  dynRate2Label.textContent = fmt(s.qd2);
  dynAccel1Label.textContent = fmt(s.qdd1);
  dynAccel2Label.textContent = fmt(s.qdd2);
  dynamicsReadout.innerHTML = `<strong>tau = M qddot + c + g + friction</strong>
    ${matrixHtml(s.M.map((row) => row.map(fmt)))}
    <p>inertial = (${s.inertial.map(fmt).join(", ")}), velocity = (${s.c.map(fmt).join(", ")}), gravity = (${s.grav.map(fmt).join(", ")}), friction = (${s.friction.map(fmt).join(", ")}).</p>
    <p>required tau = (${s.tau.map(fmt).join(", ")}).</p>`;
  const { ctx, w, h } = setupCanvas(dynamicsCanvas);
  grid(ctx, w, h);
  const base = { x: w / 2 - 80, y: h / 2 + 78 };
  const scale = 92;
  const p1 = { x: base.x + s.l1 * scale * Math.cos(s.q1), y: base.y - s.l1 * scale * Math.sin(s.q1) };
  const p2 = { x: p1.x + s.l2 * scale * Math.cos(s.q1 + s.q2), y: p1.y - s.l2 * scale * Math.sin(s.q1 + s.q2) };
  ctx.lineCap = "round";
  ctx.lineWidth = 13;
  ctx.strokeStyle = "#2364aa";
  ctx.beginPath();
  ctx.moveTo(base.x, base.y);
  ctx.lineTo(p1.x, p1.y);
  ctx.stroke();
  ctx.strokeStyle = "#2a8c6d";
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
  [base, p1, p2].forEach((p, i) => {
    ctx.fillStyle = i === 2 ? "#b84a3a" : "#fff";
    ctx.strokeStyle = "#16202a";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(p.x, p.y, i === 2 ? 8 : 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
  ctx.fillStyle = "#5a6875";
  ctx.fillText(`tau1 ${fmt(s.tau[0])}`, base.x - 26, base.y + 38);
  ctx.fillText(`tau2 ${fmt(s.tau[1])}`, p1.x + 12, p1.y - 14);
}

function drawActuationLab() {
  const N = Number(gearRatio.value);
  const Jr = Number(rotorInertia.value) / 1000;
  const b = Number(viscousFriction.value) / 100;
  const apparent = Jr * N * N;
  gearRatioLabel.textContent = String(N);
  rotorInertiaLabel.textContent = fmt(Jr);
  viscousFrictionLabel.textContent = fmt(b);
  actuationReadout.innerHTML = `<strong>Reflected actuator effects</strong>
    <p>apparent rotor inertia at joint = Jr N^2 = ${fmt(apparent)}.</p>
    <p>viscous friction torque example at qdot = 1 rad/s is ${fmt(b)}.</p>
    <p>High gear ratios multiply torque but also reflect rotor inertia strongly.</p>`;
  const { ctx, w, h } = setupCanvas(actuationCanvas);
  grid(ctx, w, h);
  const maxH = h - 80;
  const bars = [
    ["Jr", Math.min(maxH, Jr * 4000), "#2364aa"],
    ["Jr N^2", Math.min(maxH, apparent * 8), "#b84a3a"],
    ["viscous", Math.min(maxH, b * 250), "#2a8c6d"]
  ];
  bars.forEach((bar, i) => {
    const x = 90 + i * 130;
    ctx.fillStyle = bar[2];
    ctx.fillRect(x, h - 42 - bar[1], 72, bar[1]);
    ctx.fillStyle = "#16202a";
    ctx.fillText(bar[0], x + 8, h - 18);
  });
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
  if (active === "6") {
    drawAnalyticIkLab();
    drawNumericIkLab();
  }
  if (active === "7") {
    drawClosedChainLab();
    drawClosedVelocityLab();
  }
  if (active === "8") {
    drawDynamicsLab();
    drawActuationLab();
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
  ],
  "6": [
    ["Spine", "#chapter6-spine"],
    ["Analytic", "#chapter6-analytic"],
    ["Numerical", "#chapter6-numerical"],
    ["Velocity", "#chapter6-inverse-velocity"],
    ["Loops", "#chapter6-closed-loops"],
    ["Check", "#chapter6-check"]
  ],
  "7": [
    ["Spine", "#chapter7-spine"],
    ["Platform", "#chapter7-parallel"],
    ["Differential", "#chapter7-differential"],
    ["Stewart", "#chapter7-stewart"],
    ["Singularities", "#chapter7-singularities"],
    ["Check", "#chapter7-check"]
  ],
  "8": [
    ["Spine", "#chapter8-spine"],
    ["Mass", "#chapter8-mass"],
    ["Forward", "#chapter8-forward"],
    ["Newton", "#chapter8-newton"],
    ["Actuation", "#chapter8-actuation"],
    ["More", "#chapter8-extra"],
    ["Check", "#chapter8-check"]
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
[ikTargetX, ikTargetY].forEach((input) => {
  input.addEventListener("input", () => {
    drawAnalyticIkLab();
    drawNumericIkLab();
  });
});
ikBranch.addEventListener("change", drawAnalyticIkLab);
[numIkTheta1, numIkTheta2, numIkIterations].forEach((input) => {
  input.addEventListener("input", drawNumericIkLab);
});
[closedX, closedY, closedPhi].forEach((input) => {
  input.addEventListener("input", () => {
    drawClosedChainLab();
    drawClosedVelocityLab();
  });
});
[closedVx, closedVy, closedOmega].forEach((input) => {
  input.addEventListener("input", drawClosedVelocityLab);
});
[dynTheta1, dynTheta2, dynRate1, dynRate2, dynAccel1, dynAccel2].forEach((input) => {
  input.addEventListener("input", drawDynamicsLab);
});
[gearRatio, rotorInertia, viscousFriction].forEach((input) => {
  input.addEventListener("input", drawActuationLab);
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
renderChapter6Concepts();
renderGenericQuiz("#chapter6Quiz", chapter6QuizItems, "Not quite. Chapter 6 is about reversing forward kinematics with analytic branches or Jacobian-based numerical steps.");
renderChapter7Concepts();
renderGenericQuiz("#chapter7Quiz", chapter7QuizItems, "Not quite. Chapter 7 is about loop constraints, parallel mechanisms, and the velocity constraints created by closed chains.");
renderChapter8Concepts();
renderGenericQuiz("#chapter8Quiz", chapter8QuizItems, "Not quite. Chapter 8 is about effort, inertia, gravity, velocity coupling, and actuator realities.");
setChapter("1");
drawArm();
