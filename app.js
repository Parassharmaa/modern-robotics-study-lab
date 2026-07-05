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

const chapter9Concepts = [
  { title: "Path", text: "A geometric curve with no timing attached." },
  { title: "Trajectory", text: "A path plus a time scaling, giving position, velocity, and acceleration at each time." },
  { title: "Straight-line paths", text: "Interpolate linearly in joint space or task space between start and end configurations." },
  { title: "Time scaling", text: "The scalar s(t) moves from 0 to 1 while satisfying boundary velocity and acceleration conditions." },
  { title: "Cubic scaling", text: "Cubic timing can start and stop with zero velocity." },
  { title: "Quintic scaling", text: "Quintic timing can additionally start and stop with zero acceleration." },
  { title: "Via points", text: "Intermediate points guide motion, usually with piecewise polynomial segments." },
  { title: "Time optimality", text: "The fastest feasible timing follows velocity and acceleration limits in the phase plane." }
];

const chapter9QuizItems = [
  { q: "What is the difference between a path and a trajectory?", answers: ["A trajectory includes timing; a path is only geometry.", "A path includes torque; a trajectory cannot.", "They are always identical."], correct: 0, note: "Yes. Chapter 9 is largely about adding timing to paths." },
  { q: "What does s(t) represent?", answers: ["Progress along a path from 0 to 1.", "A joint torque.", "A collision obstacle."], correct: 0, note: "Right. s(t) is the scalar time scaling." },
  { q: "Why use quintic time scaling?", answers: ["It can enforce zero velocity and zero acceleration at endpoints.", "It removes all singularities.", "It is only for mobile robots."], correct: 0, note: "Exactly. Quintic has enough coefficients for more endpoint conditions." },
  { q: "What are via points?", answers: ["Intermediate configurations the trajectory should pass through.", "Only final endpoint velocities.", "Friction constants."], correct: 0, note: "Good. Via points shape a multi-segment trajectory." },
  { q: "What does the s, sdot phase plane help with?", answers: ["Time-optimal time scaling under limits.", "URDF parsing.", "Choosing link lengths."], correct: 0, note: "Yes. It is the natural picture for acceleration-limited path timing." }
];

const chapter10Concepts = [
  { title: "Motion planning problem", text: "Find a path from start to goal through collision-free configuration space." },
  { title: "C-space obstacles", text: "Workspace obstacles induce forbidden sets in configuration space." },
  { title: "Distance and collision tests", text: "Planners repeatedly ask whether configurations or edges are safe." },
  { title: "Graphs and trees", text: "Many planners reduce motion planning to graph search over sampled or discretized states." },
  { title: "Grid methods", text: "Discretize C-space into cells and search neighbors, sometimes at multiple resolutions." },
  { title: "Sampling methods", text: "RRT and PRM avoid full grids by sampling free configurations." },
  { title: "Potential fields", text: "Use attractive and repulsive functions to define a descent direction." },
  { title: "Optimization and smoothing", text: "Improve rough paths after search while preserving collision-free constraints." }
];

const chapter10QuizItems = [
  { q: "What is Cfree?", answers: ["The collision-free subset of configuration space.", "The set of motor torques.", "Only endpoint positions."], correct: 0, note: "Yes. Planning searches through Cfree." },
  { q: "What does a grid planner search?", answers: ["A graph induced by neighboring free cells.", "Only continuous torques.", "A URDF file."], correct: 0, note: "Right. Discretization turns planning into graph search." },
  { q: "What is an RRT?", answers: ["A tree grown through random samples in free space.", "A dynamics equation.", "A force controller."], correct: 0, note: "Exactly. RRTs explore by extending from existing nodes toward samples." },
  { q: "What is a potential-field weakness?", answers: ["It can get stuck in local minima.", "It cannot represent goals.", "It always guarantees optimality."], correct: 0, note: "Good. Potential fields are intuitive but can trap descent." },
  { q: "Why smooth a planned path?", answers: ["Search paths can be jagged or unnecessarily long.", "Smoothing makes collisions irrelevant.", "It replaces all planning."], correct: 0, note: "Yes. Smoothing improves a found path, but still must respect obstacles." }
];

const chapter11Concepts = [
  { title: "Control system overview", text: "A controller compares desired and measured motion, then sends velocity, torque, or force commands to the robot." },
  { title: "Error dynamics", text: "Instead of only asking what the controller computes, Chapter 11 asks how the tracking error evolves over time." },
  { title: "First-order response", text: "Velocity P control can make the error decay exponentially, with larger gain giving faster convergence." },
  { title: "Second-order response", text: "PI velocity control and PD torque control behave like mass-spring-damper systems with damping and natural frequency." },
  { title: "Velocity-input control", text: "Feedforward velocity follows a planned trajectory; feedback terms correct accumulated position error." },
  { title: "Torque-input control", text: "PID, feedforward torque, gravity compensation, and computed torque command physical effort directly." },
  { title: "Multi-joint control", text: "Decentralized joint controllers are simple; model-based computed torque accounts for coupled mass, Coriolis, and gravity terms." },
  { title: "Task-space control", text: "End-effector error is represented as a twist and mapped through the Jacobian or inverse dynamics." },
  { title: "Force control", text: "When the task is to push, polish, or hold contact, the controlled output is wrench rather than only position." },
  { title: "Hybrid motion-force control", text: "Constrained directions regulate force while unconstrained directions regulate motion." },
  { title: "Impedance and admittance", text: "Impedance specifies force from motion error; admittance specifies motion response from measured force." },
  { title: "Low-level torque loops", text: "Real robots rely on amplifier, motor, gear, friction, saturation, and sensing details below the high-level law." }
];

const chapter11QuizItems = [
  { q: "What is error dynamics?", answers: ["The time evolution of tracking error under a controller.", "The geometry of C-space obstacles.", "The number of links in a mechanism."], correct: 0, note: "Yes. Chapter 11 judges controllers by the error response they produce." },
  { q: "Why add feedforward to feedback?", answers: ["Feedforward anticipates the desired motion while feedback corrects mistakes.", "It removes the need for sensors.", "It guarantees no actuator limits."], correct: 0, note: "Right. The combination is usually stronger than either piece alone." },
  { q: "What does computed torque use?", answers: ["A model of robot dynamics plus feedback acceleration terms.", "Only a grid planner.", "Only camera pixels."], correct: 0, note: "Exactly. Inverse dynamics turns desired acceleration into torque." },
  { q: "When is force control needed?", answers: ["When the robot must regulate contact forces or wrenches.", "Only when no environment exists.", "Only for open-loop trajectories."], correct: 0, note: "Good. Contact tasks often care about force as much as pose." },
  { q: "What does hybrid motion-force control separate?", answers: ["Motion-controlled and force-controlled directions.", "Chapter numbers from exercises.", "Mass from inertia."], correct: 0, note: "Yes. Constraints decide which directions should move and which should push." },
  { q: "What is the core idea of impedance control?", answers: ["Specify a dynamic relation between motion error and force.", "Search a graph of cells.", "Count degrees of freedom only."], correct: 0, note: "Correct. Impedance makes contact behavior compliant instead of rigid." }
];

const chapter12Concepts = [
  { title: "Manipulation viewpoint", text: "The object being moved is the main system; the robot is one source of contact constraints and forces." },
  { title: "Contact normal", text: "A point contact defines a tangent plane and a normal direction that prevents interpenetration." },
  { title: "First-order contact kinematics", text: "The normal relative velocity determines whether contact is maintained, breaking, or trying to penetrate." },
  { title: "Rolling and sticking", text: "Rolling contact has no relative velocity at the contact point, so both normal and tangential relative velocities vanish." },
  { title: "Sliding", text: "Sliding maintains normal contact while allowing tangential relative motion." },
  { title: "Multiple contacts", text: "Each contact adds a half-space constraint; their intersection is the feasible twist set." },
  { title: "Planar graphical methods", text: "Planar twists can be visualized with centers of rotation and contact labels." },
  { title: "Form closure", text: "A body is in first-order form closure when the only twist satisfying all contact constraints is zero." },
  { title: "Coulomb friction", text: "Tangential force is limited by mu times the normal force, creating a friction cone." },
  { title: "Wrench cones", text: "A contact force at a point creates a wrench; friction-cone edges become rays in wrench space." },
  { title: "Force closure", text: "A grasp has force closure when available contact wrenches can resist arbitrary disturbance wrenches." },
  { title: "Manipulation planning", text: "Tasks combine contact modes: grasping, fixturing, pushing, sliding, rolling, releasing, and regrasping." }
];

const chapter12QuizItems = [
  { q: "What does a contact normal constraint prevent?", answers: ["Interpenetration of the two bodies.", "All tangential motion.", "Every external wrench."], correct: 0, note: "Yes. The normal direction is the first-order impenetrability constraint." },
  { q: "How does sliding differ from rolling at a point contact?", answers: ["Sliding has tangential relative motion; rolling has none at the contact point.", "Sliding requires no contact normal.", "Rolling always means breaking free."], correct: 0, note: "Right. Both can maintain contact, but only rolling/sticking removes tangential relative velocity." },
  { q: "What is form closure about?", answers: ["Contacts immobilizing the object kinematically.", "A controller eliminating velocity error.", "A grid planner finding a path."], correct: 0, note: "Correct. Form closure is a motion constraint property." },
  { q: "What does a friction cone describe?", answers: ["The set of contact force directions allowed by Coulomb friction.", "The set of robot joint angles.", "Only the object center of mass."], correct: 0, note: "Exactly. Larger mu gives a wider cone." },
  { q: "What is force closure about?", answers: ["Available contact wrenches resisting arbitrary disturbance wrenches.", "The number of links in a chain.", "Only rolling without friction."], correct: 0, note: "Yes. Force closure is a wrench-space property." },
  { q: "Why does manipulation planning track contact modes?", answers: ["Because grasping, pushing, sliding, rolling, and breaking contact obey different constraints.", "Because all contacts are equivalent.", "Because friction is never relevant."], correct: 0, note: "Good. The active contact mode changes the feasible motion and force model." }
];

const chapter13Concepts = [
  { title: "Planar chassis configuration", text: "The base pose is q = (phi, x, y), or equivalently an SE(2) transform Tsb." },
  { title: "Body twist", text: "The chassis velocity can be expressed as Vb = (omega_bz, v_bx, v_by) in the body frame." },
  { title: "Conventional wheels", text: "Typical wheels roll forward and resist sideways slip, creating nonholonomic constraints." },
  { title: "Omni and mecanum wheels", text: "Passive rollers allow sideways sliding at each wheel, so the chassis can be omnidirectional." },
  { title: "Omnidirectional modeling", text: "A wheel-speed matrix maps desired chassis velocity or body twist to individual wheel speeds." },
  { title: "Omni planning and control", text: "Because any planar velocity is possible, standard path planning and feedforward plus PI feedback apply." },
  { title: "Unicycle model", text: "The canonical nonholonomic robot uses forward speed v and turn rate omega." },
  { title: "Differential drive", text: "Left and right wheel speeds combine into forward speed and yaw rate." },
  { title: "Car-like robots", text: "Ackermann steering enforces rolling without sideways slip while limiting curvature." },
  { title: "Controllability", text: "Lie brackets explain how forward and turning motions can produce sideways reachable motion." },
  { title: "Odometry", text: "Wheel encoder integration estimates pose but accumulates drift from model and slip errors." },
  { title: "Mobile manipulation", text: "A mobile base and robot arm are coordinated through a combined task-space Jacobian." }
];

const chapter13QuizItems = [
  { q: "What distinguishes an omnidirectional base?", answers: ["It has no equality constraint on planar chassis velocity.", "It can never rotate.", "It must use conventional car wheels only."], correct: 0, note: "Yes. Omni and mecanum bases can command sideways velocity." },
  { q: "Why is a differential-drive base nonholonomic?", answers: ["It cannot move sideways instantaneously because the wheels roll without lateral slip.", "It cannot drive forward.", "It has no wheel encoders."], correct: 0, note: "Right. The sideways velocity constraint is nonintegrable." },
  { q: "What does a Lie bracket maneuver explain?", answers: ["How alternating feasible motions can create a small net motion in a new direction.", "How to compute motor torque from mass.", "How to form a friction cone."], correct: 0, note: "Exactly. The parallel-parking motion is the famous Chapter 13 picture." },
  { q: "What does odometry integrate?", answers: ["Wheel motion through the kinematic model to estimate pose.", "Only camera images.", "Only contact forces."], correct: 0, note: "Good. Odometry is dead reckoning from wheel measurements." },
  { q: "Why do odometry errors grow?", answers: ["Small wheel, slip, and calibration errors are integrated over time.", "The robot forgets its chapter number.", "Omniwheels remove all sensing needs."], correct: 0, note: "Yes. Integrated error is the core odometry warning." },
  { q: "What is mobile manipulation?", answers: ["Coordinated control of a mobile base and arm to move the end-effector.", "Only a fixed-base arm.", "Only a standalone wheel."], correct: 0, note: "Correct. The base gives reach; the arm gives dexterity." }
];

const appendixAConcepts = [
  { title: "Degrees of freedom", text: "Count configuration variables minus independent constraints; Grubler's formula is the mechanism shortcut." },
  { title: "SO(3)", text: "Rotation matrices, axis-angle exponentials, angular velocity, and matrix logarithms." },
  { title: "SE(3)", text: "Rigid transforms, twists, adjoints, screw axes, exponential coordinates, and wrenches." },
  { title: "PoE forward kinematics", text: "Space and body product-of-exponentials formulas map joint values to end-effector pose." },
  { title: "Jacobians", text: "Space/body Jacobians map joint rates to twists and relate through adjoint transforms." },
  { title: "Statics", text: "Joint efforts are transpose-Jacobian maps of endpoint wrenches." },
  { title: "Inverse kinematics", text: "Closed-form geometry or Newton-Raphson updates using the Jacobian pseudoinverse." },
  { title: "Dynamics", text: "Mass matrix, velocity terms, gravity, friction, and endpoint loads determine torque." },
  { title: "Trajectories", text: "Path geometry plus time scaling gives position, velocity, and acceleration profiles." },
  { title: "Control", text: "Feedforward plus feedback maps desired motion and error to commanded velocity or torque." },
  { title: "Contact", text: "Contact normals, friction cones, form closure, and force closure describe manipulation constraints." },
  { title: "Mobile robots", text: "Wheel-speed matrices, nonholonomic models, Lie brackets, odometry, and mobile-manipulator Jacobians." }
];

const formulaTopics = {
  dof: {
    label: "Configuration and DOF",
    formula: "dof = m(N - 1 - J) + sum(fi)",
    question: "How many independent coordinates describe this mechanism?",
    note: "Use m = 3 for planar mechanisms and m = 6 for spatial mechanisms when constraints are independent.",
    chapter: "Ch. 2"
  },
  so3: {
    label: "SO(3) rotations",
    formula: "R = exp([omega] theta), R^-1 = R^T",
    question: "How do I represent and compose 3D orientation?",
    note: "SO(3) formulas convert between rotation matrices, angular velocities, and exponential coordinates.",
    chapter: "Ch. 3"
  },
  se3: {
    label: "SE(3), twists, and adjoints",
    formula: "T = [R p; 0 1], Va = Ad_Tab Vb",
    question: "How do I move poses, twists, and wrenches between frames?",
    note: "Adjoints are the bridge between coordinate frames for screw axes and twists; inverse-transpose adjoints handle wrenches.",
    chapter: "Ch. 3"
  },
  poe: {
    label: "Product of exponentials",
    formula: "T(theta) = exp([S1]theta1)...exp([Sn]thetan) M",
    question: "Given joint angles, where is the end-effector?",
    note: "The space form multiplies screw motions before the home pose; the body form multiplies them after M.",
    chapter: "Ch. 4"
  },
  jacobian: {
    label: "Jacobians and statics",
    formula: "V = J(theta) thetadot, tau = J(theta)^T F",
    question: "How do joint rates and endpoint twists or wrenches relate?",
    note: "The same Jacobian that maps velocity forward maps endpoint wrench backward through its transpose.",
    chapter: "Ch. 5"
  },
  dynamics: {
    label: "Robot dynamics",
    formula: "tau = M(theta) thetaddot + c(theta,thetadot) + g(theta) + J^T Ftip",
    question: "What torque is needed for this motion and load?",
    note: "The mass matrix changes with configuration, while velocity, gravity, friction, and external wrenches add effort terms.",
    chapter: "Ch. 8"
  },
  trajectory: {
    label: "Trajectory timing",
    formula: "trajectory = path q(s) plus time scaling s(t)",
    question: "How do I turn a geometric path into commanded motion?",
    note: "Cubic and quintic time scalings enforce endpoint velocity and acceleration conditions.",
    chapter: "Ch. 9"
  },
  control: {
    label: "Feedback control",
    formula: "command = feedforward + Kp error + Ki integral + Kd error_dot",
    question: "How do I make the robot track despite disturbances?",
    note: "Chapter 11 applies this pattern to velocity inputs, torque inputs, task-space motion, and contact.",
    chapter: "Ch. 11"
  },
  contact: {
    label: "Contact and friction",
    formula: "|ft| <= mu fn; feasible twists satisfy contact half-spaces",
    question: "What can the object do, and what wrenches can contacts resist?",
    note: "Motion constraints and wrench cones are dual pictures for grasping and manipulation.",
    chapter: "Ch. 12"
  },
  mobile: {
    label: "Wheeled mobile robots",
    formula: "omni: u = H Vb; nonholonomic: qdot = G(q)u",
    question: "How do wheel speeds move the chassis and end-effector?",
    note: "Omni bases command any planar twist; nonholonomic bases rely on maneuvers, controllability, and odometry.",
    chapter: "Ch. 13"
  }
};

const appendixAQuizItems = [
  { q: "Which formula family counts mechanism coordinates?", answers: ["Degrees of freedom and constraints.", "Force closure only.", "Cubic time scaling only."], correct: 0, note: "Yes. DOF is configuration variables minus independent constraints." },
  { q: "Which object maps joint rates to endpoint twists?", answers: ["The Jacobian.", "The mass matrix alone.", "The friction coefficient."], correct: 0, note: "Correct. V = J(theta) thetadot." },
  { q: "Which formula maps endpoint wrench to joint effort?", answers: ["tau = J^T F.", "R^-1 = R^T.", "qdot = G(q)u."], correct: 0, note: "Right. This is the statics dual of differential kinematics." },
  { q: "Which formula family predicts torque for acceleration, gravity, and loads?", answers: ["Robot dynamics.", "Appendix B Euler angles.", "Only Grubler's formula."], correct: 0, note: "Exactly. Dynamics maps motion and load to effort." },
  { q: "Which appendix pattern is most useful for mobile base odometry?", answers: ["Wheel increments mapped through the chassis model and integrated.", "A force ellipsoid.", "A friction cone only."], correct: 0, note: "Yes. Odometry is wheel-motion integration through the kinematic model." },
  { q: "What does the product of exponentials answer?", answers: ["Forward kinematics from joint values to pose.", "How much friction is available.", "Whether a car can move sideways instantly."], correct: 0, note: "Good. PoE is the compact forward-kinematics formula." }
];

const appendixBConcepts = [
  { title: "Euler-angle idea", text: "Represent orientation as three successive rotations about ordered axes." },
  { title: "ZYX Euler angles", text: "Rotate about body z, then body y, then body x; the final matrix is Rot(z, alpha) Rot(y, beta) Rot(x, gamma)." },
  { title: "Euler singularity", text: "When beta is +/-90 degrees for ZYX angles, alpha and gamma are no longer independently identifiable." },
  { title: "Roll-pitch-yaw", text: "Roll-pitch-yaw angles use rotations about fixed space-frame axes, commonly interpreted for aircraft or vehicles." },
  { title: "Same product, different story", text: "ZYX body-frame Euler angles and XYZ fixed-frame roll-pitch-yaw can produce the same matrix product." },
  { title: "Unit quaternions", text: "Four constrained numbers on the unit sphere represent rotations without local singularities." },
  { title: "Quaternion double cover", text: "The quaternions q and -q correspond to the same rotation matrix." },
  { title: "Quaternion composition", text: "Quaternion multiplication represents composition of rotations." },
  { title: "Cayley-Rodrigues parameters", text: "A three-vector r = tan(theta/2) omega gives local coordinates for SO(3)." },
  { title: "Cayley limitation", text: "Cayley-Rodrigues parameters fail for 180-degree rotations where tr(R) = -1." },
  { title: "Choosing a representation", text: "Use angles for human readability, quaternions for smooth computation, and matrices for direct action on vectors." },
  { title: "Always the same rotation", text: "All valid representations must agree on the underlying matrix R in SO(3)." }
];

const appendixBQuizItems = [
  { q: "What happens to ZYX Euler angles at beta = +/-90 degrees?", answers: ["Alpha and gamma are not uniquely determined.", "The rotation matrix stops existing.", "Quaternions become impossible."], correct: 0, note: "Yes. This is the classic Euler-angle singularity." },
  { q: "How are fixed-frame roll-pitch-yaw rotations different from body-frame Euler rotations?", answers: ["They describe rotations about space-fixed axes instead of moving body axes.", "They use four numbers only.", "They cannot represent yaw."], correct: 0, note: "Correct. The physical interpretation of the ordered rotations changes." },
  { q: "What constraint do unit quaternions satisfy?", answers: ["q0^2 + q1^2 + q2^2 + q3^2 = 1.", "det(q) = -1.", "beta must equal zero."], correct: 0, note: "Right. Unit quaternions live on the unit 3-sphere." },
  { q: "Why do q and -q both matter?", answers: ["They represent the same rotation.", "They represent opposite translations.", "Only one has unit length."], correct: 0, note: "Exactly. Unit quaternions double-cover SO(3)." },
  { q: "When do Cayley-Rodrigues parameters break down?", answers: ["At 180-degree rotations where tr(R) = -1.", "At the identity rotation.", "For every small rotation."], correct: 0, note: "Yes. The tangent half-angle blows up at pi radians." },
  { q: "Which representation is usually best for directly rotating a vector?", answers: ["A rotation matrix.", "A chapter number.", "A friction cone."], correct: 0, note: "Good. Matrices act directly on vectors, even if another representation is used for storage." }
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
const trajDuration = document.querySelector("#trajDuration");
const trajScaling = document.querySelector("#trajScaling");
const trajTime = document.querySelector("#trajTime");
const trajDurationLabel = document.querySelector("#trajDurationLabel");
const trajTimeLabel = document.querySelector("#trajTimeLabel");
const trajReadout = document.querySelector("#trajReadout");
const trajCanvas = document.querySelector("#trajCanvas");
const viaHeight = document.querySelector("#viaHeight");
const viaEnd = document.querySelector("#viaEnd");
const viaHeightLabel = document.querySelector("#viaHeightLabel");
const viaEndLabel = document.querySelector("#viaEndLabel");
const viaReadout = document.querySelector("#viaReadout");
const viaCanvas = document.querySelector("#viaCanvas");
const phaseCanvas = document.querySelector("#phaseCanvas");
const plannerMode = document.querySelector("#plannerMode");
const plannerGap = document.querySelector("#plannerGap");
const plannerGapLabel = document.querySelector("#plannerGapLabel");
const plannerReadout = document.querySelector("#plannerReadout");
const plannerCanvas = document.querySelector("#plannerCanvas");
const sampleCount = document.querySelector("#sampleCount");
const sampleCountLabel = document.querySelector("#sampleCountLabel");
const samplingReadout = document.querySelector("#samplingReadout");
const samplingCanvas = document.querySelector("#samplingCanvas");
const potentialCanvas = document.querySelector("#potentialCanvas");
const velocityController = document.querySelector("#velocityController");
const velKp = document.querySelector("#velKp");
const velKi = document.querySelector("#velKi");
const velBias = document.querySelector("#velBias");
const velKpLabel = document.querySelector("#velKpLabel");
const velKiLabel = document.querySelector("#velKiLabel");
const velBiasLabel = document.querySelector("#velBiasLabel");
const velocityReadout = document.querySelector("#velocityReadout");
const velocityCanvas = document.querySelector("#velocityCanvas");
const torqueController = document.querySelector("#torqueController");
const torqueKp = document.querySelector("#torqueKp");
const torqueKd = document.querySelector("#torqueKd");
const modelAccuracy = document.querySelector("#modelAccuracy");
const torqueKpLabel = document.querySelector("#torqueKpLabel");
const torqueKdLabel = document.querySelector("#torqueKdLabel");
const modelAccuracyLabel = document.querySelector("#modelAccuracyLabel");
const torqueReadout = document.querySelector("#torqueReadout");
const torqueCanvas = document.querySelector("#torqueCanvas");
const contactMode = document.querySelector("#contactMode");
const contactStiffness = document.querySelector("#contactStiffness");
const contactDamping = document.querySelector("#contactDamping");
const desiredForce = document.querySelector("#desiredForce");
const contactStiffnessLabel = document.querySelector("#contactStiffnessLabel");
const contactDampingLabel = document.querySelector("#contactDampingLabel");
const desiredForceLabel = document.querySelector("#desiredForceLabel");
const contactReadout = document.querySelector("#contactReadout");
const contactCanvas = document.querySelector("#contactCanvas");
const contactTwistMode = document.querySelector("#contactTwistMode");
const normalVelocity = document.querySelector("#normalVelocity");
const tangentVelocity = document.querySelector("#tangentVelocity");
const normalVelocityLabel = document.querySelector("#normalVelocityLabel");
const tangentVelocityLabel = document.querySelector("#tangentVelocityLabel");
const contactKinematicsReadout = document.querySelector("#contactKinematicsReadout");
const contactKinematicsCanvas = document.querySelector("#contactKinematicsCanvas");
const frictionMu = document.querySelector("#frictionMu");
const normalForce = document.querySelector("#normalForce");
const contactOffset = document.querySelector("#contactOffset");
const frictionMuLabel = document.querySelector("#frictionMuLabel");
const normalForceLabel = document.querySelector("#normalForceLabel");
const contactOffsetLabel = document.querySelector("#contactOffsetLabel");
const frictionReadout = document.querySelector("#frictionReadout");
const frictionCanvas = document.querySelector("#frictionCanvas");
const graspLayout = document.querySelector("#graspLayout");
const graspSpread = document.querySelector("#graspSpread");
const graspSpreadLabel = document.querySelector("#graspSpreadLabel");
const closureReadout = document.querySelector("#closureReadout");
const closureCanvas = document.querySelector("#closureCanvas");
const omniVx = document.querySelector("#omniVx");
const omniVy = document.querySelector("#omniVy");
const omniOmega = document.querySelector("#omniOmega");
const omniVxLabel = document.querySelector("#omniVxLabel");
const omniVyLabel = document.querySelector("#omniVyLabel");
const omniOmegaLabel = document.querySelector("#omniOmegaLabel");
const omniReadout = document.querySelector("#omniReadout");
const omniCanvas = document.querySelector("#omniCanvas");
const nonholonomicMode = document.querySelector("#nonholonomicMode");
const mobileSpeed = document.querySelector("#mobileSpeed");
const mobileTurn = document.querySelector("#mobileTurn");
const mobileSpeedLabel = document.querySelector("#mobileSpeedLabel");
const mobileTurnLabel = document.querySelector("#mobileTurnLabel");
const nonholonomicReadout = document.querySelector("#nonholonomicReadout");
const nonholonomicCanvas = document.querySelector("#nonholonomicCanvas");
const leftBias = document.querySelector("#leftBias");
const rightBias = document.querySelector("#rightBias");
const odomSteps = document.querySelector("#odomSteps");
const leftBiasLabel = document.querySelector("#leftBiasLabel");
const rightBiasLabel = document.querySelector("#rightBiasLabel");
const odomStepsLabel = document.querySelector("#odomStepsLabel");
const odometryReadout = document.querySelector("#odometryReadout");
const odometryCanvas = document.querySelector("#odometryCanvas");
const formulaTopic = document.querySelector("#formulaTopic");
const formulaDetail = document.querySelector("#formulaDetail");
const formulaDetailLabel = document.querySelector("#formulaDetailLabel");
const formulaReadout = document.querySelector("#formulaReadout");
const formulaCanvas = document.querySelector("#formulaCanvas");
const rotationRep = document.querySelector("#rotationRep");
const rotAlpha = document.querySelector("#rotAlpha");
const rotBeta = document.querySelector("#rotBeta");
const rotGamma = document.querySelector("#rotGamma");
const rotAlphaLabel = document.querySelector("#rotAlphaLabel");
const rotBetaLabel = document.querySelector("#rotBetaLabel");
const rotGammaLabel = document.querySelector("#rotGammaLabel");
const rotationRepReadout = document.querySelector("#rotationRepReadout");
const rotationRepCanvas = document.querySelector("#rotationRepCanvas");

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

function renderChapter9Concepts() {
  const el = document.querySelector("#chapter9Concepts");
  el.innerHTML = chapter9Concepts.map((item, index) => `
    <article class="concept-card">
      <h3>${index + 1}. ${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function timeScalingValues(u, T, mode) {
  if (mode === "quintic") {
    return {
      s: 10 * u ** 3 - 15 * u ** 4 + 6 * u ** 5,
      sd: (30 * u ** 2 - 60 * u ** 3 + 30 * u ** 4) / T,
      sdd: (60 * u - 180 * u ** 2 + 120 * u ** 3) / (T * T)
    };
  }
  return {
    s: 3 * u * u - 2 * u * u * u,
    sd: (6 * u - 6 * u * u) / T,
    sdd: (6 - 12 * u) / (T * T)
  };
}

function drawTrajectoryLab() {
  const T = Number(trajDuration.value);
  const mode = trajScaling.value;
  const u = Number(trajTime.value) / 100;
  const vals = timeScalingValues(u, T, mode);
  trajDurationLabel.textContent = fmt(T);
  trajTimeLabel.textContent = fmt(u * T);
  trajReadout.innerHTML = `<strong>${mode} time scaling</strong>
    <p>at t = ${fmt(u * T)}: s = ${fmt(vals.s)}, sdot = ${fmt(vals.sd)}, sddot = ${fmt(vals.sdd)}.</p>
    <p>${mode === "quintic" ? "Quintic starts and stops with zero velocity and acceleration." : "Cubic starts and stops with zero velocity, but endpoint acceleration is nonzero."}</p>`;
  const { ctx, w, h } = setupCanvas(trajCanvas);
  grid(ctx, w, h);
  const left = 44;
  const right = w - 24;
  const mid = h / 2;
  function plot(fn, color, scale, y0) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i <= 120; i += 1) {
      const uu = i / 120;
      const v = fn(timeScalingValues(uu, T, mode));
      const x = left + uu * (right - left);
      const y = y0 - v * scale;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  plot((v) => v.s, "#2364aa", h * 0.32, h - 46);
  plot((v) => v.sd, "#2a8c6d", h * 0.8, mid + 20);
  plot((v) => v.sdd, "#b84a3a", h * 1.8, mid + 54);
  const x = left + u * (right - left);
  ctx.strokeStyle = "#16202a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, 24);
  ctx.lineTo(x, h - 28);
  ctx.stroke();
  ctx.fillStyle = "#5a6875";
  ctx.fillText("blue s(t), green sdot(t), red sddot(t)", left, 28);
}

function drawViaLab() {
  const mid = Number(viaHeight.value);
  const end = Number(viaEnd.value);
  viaHeightLabel.textContent = String(mid);
  viaEndLabel.textContent = String(end);
  viaReadout.innerHTML = `<strong>Piecewise via-point path</strong>
    <p>waypoints: (0, 0), (0.5, ${mid}), (1, ${end}).</p>
    <p>A real planner chooses segment durations and boundary velocities to avoid jerks at joins.</p>`;
  const { ctx, w, h } = setupCanvas(viaCanvas);
  grid(ctx, w, h);
  const pts = [
    { x: 50, y: h / 2 },
    { x: w / 2, y: h / 2 - mid },
    { x: w - 58, y: h / 2 - end }
  ];
  ctx.strokeStyle = "#2364aa";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  ctx.bezierCurveTo(w * 0.25, pts[0].y, w * 0.26, pts[1].y, pts[1].x, pts[1].y);
  ctx.bezierCurveTo(w * 0.74, pts[1].y, w * 0.75, pts[2].y, pts[2].x, pts[2].y);
  ctx.stroke();
  pts.forEach((p, i) => {
    ctx.fillStyle = i === 1 ? "#d39b25" : "#b84a3a";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 9, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.fillStyle = "#5a6875";
  ctx.fillText("via point", pts[1].x + 12, pts[1].y - 10);
}

function drawPhasePlane() {
  const { ctx, w, h } = setupCanvas(phaseCanvas);
  grid(ctx, w, h);
  const left = 56;
  const bottom = h - 42;
  const top = 34;
  const right = w - 34;
  ctx.strokeStyle = "#16202a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(left, bottom);
  ctx.lineTo(right, bottom);
  ctx.moveTo(left, bottom);
  ctx.lineTo(left, top);
  ctx.stroke();
  function map(s, sd) {
    return { x: left + s * (right - left), y: bottom - sd * (bottom - top) };
  }
  ctx.strokeStyle = "#d39b25";
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = 0; i <= 100; i += 1) {
    const s = i / 100;
    const lim = Math.min(0.92, 0.22 + 0.72 * Math.sin(Math.PI * s));
    const p = map(s, lim);
    if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
  }
  ctx.stroke();
  ctx.strokeStyle = "#2364aa";
  ctx.beginPath();
  for (let i = 0; i <= 48; i += 1) {
    const s = i / 100;
    const p = map(s, Math.sqrt(s) * 0.72);
    if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
  }
  for (let i = 48; i <= 100; i += 1) {
    const s = i / 100;
    const p = map(s, Math.sqrt(1 - s) * 0.74);
    ctx.lineTo(p.x, p.y);
  }
  ctx.stroke();
  ctx.fillStyle = "#5a6875";
  ctx.fillText("s", right - 10, bottom + 22);
  ctx.fillText("sdot", left - 34, top + 6);
  ctx.fillText("yellow: velocity limit, blue: accelerate then brake", left + 20, top + 18);
}

function renderChapter10Concepts() {
  const el = document.querySelector("#chapter10Concepts");
  el.innerHTML = chapter10Concepts.map((item, index) => `
    <article class="concept-card">
      <h3>${index + 1}. ${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function plannerGrid(gap) {
  const n = 14;
  const blocked = new Set();
  for (let y = 2; y < 12; y += 1) {
    if (y !== gap && y !== gap + 1) blocked.add(`6,${y}`);
  }
  for (let x = 2; x < 11; x += 1) {
    if (x !== 3 && x !== 4) blocked.add(`${x},8`);
  }
  return { n, blocked, start: [1, 12], goal: [12, 1] };
}

function searchGrid(mode, gap) {
  const gridData = plannerGrid(gap);
  const { n, blocked, start, goal } = gridData;
  const key = (p) => `${p[0]},${p[1]}`;
  const h = (p) => Math.abs(p[0] - goal[0]) + Math.abs(p[1] - goal[1]);
  const frontier = [{ p: start, cost: 0, priority: 0 }];
  const came = new Map([[key(start), null]]);
  const cost = new Map([[key(start), 0]]);
  const visited = [];
  while (frontier.length) {
    frontier.sort((a, b) => a.priority - b.priority);
    const cur = frontier.shift();
    const ck = key(cur.p);
    visited.push(cur.p);
    if (ck === key(goal)) break;
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach((d) => {
      const np = [cur.p[0] + d[0], cur.p[1] + d[1]];
      const nk = key(np);
      if (np[0] < 0 || np[1] < 0 || np[0] >= n || np[1] >= n || blocked.has(nk)) return;
      const nc = cost.get(ck) + 1;
      if (!cost.has(nk) || nc < cost.get(nk)) {
        cost.set(nk, nc);
        came.set(nk, cur.p);
        const priority = mode === "bfs" ? nc : mode === "greedy" ? h(np) : nc + h(np);
        frontier.push({ p: np, cost: nc, priority });
      }
    });
  }
  const path = [];
  let cur = goal;
  while (cur && came.has(key(cur))) {
    path.push(cur);
    cur = came.get(key(cur));
  }
  path.reverse();
  return { ...gridData, visited, path: path[0] ? path : [] };
}

function drawPlannerLab() {
  const gap = Number(plannerGap.value);
  const mode = plannerMode.value;
  const result = searchGrid(mode, gap);
  plannerGapLabel.textContent = String(gap);
  plannerReadout.innerHTML = `<strong>${plannerMode.options[plannerMode.selectedIndex].text}</strong>
    <p>visited cells = ${result.visited.length}, path length = ${result.path.length ? result.path.length - 1 : "none"}.</p>
    <p>Blocked cells are C-space obstacles; free neighbor links form the graph.</p>`;
  const { ctx, w, h } = setupCanvas(plannerCanvas);
  ctx.clearRect(0, 0, w, h);
  const size = Math.min((w - 36) / result.n, (h - 36) / result.n);
  const ox = (w - size * result.n) / 2;
  const oy = (h - size * result.n) / 2;
  const key = (p) => `${p[0]},${p[1]}`;
  result.visited.forEach((p) => {
    ctx.fillStyle = "#edf5ff";
    ctx.fillRect(ox + p[0] * size, oy + p[1] * size, size, size);
  });
  result.blocked.forEach((k) => {
    const [x, y] = k.split(",").map(Number);
    ctx.fillStyle = "#16202a";
    ctx.fillRect(ox + x * size, oy + y * size, size, size);
  });
  ctx.strokeStyle = "#d6dee6";
  ctx.lineWidth = 1;
  for (let i = 0; i <= result.n; i += 1) {
    ctx.beginPath();
    ctx.moveTo(ox + i * size, oy);
    ctx.lineTo(ox + i * size, oy + result.n * size);
    ctx.moveTo(ox, oy + i * size);
    ctx.lineTo(ox + result.n * size, oy + i * size);
    ctx.stroke();
  }
  if (result.path.length) {
    ctx.strokeStyle = "#b84a3a";
    ctx.lineWidth = 4;
    ctx.beginPath();
    result.path.forEach((p, i) => {
      const x = ox + (p[0] + 0.5) * size;
      const y = oy + (p[1] + 0.5) * size;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }
  [result.start, result.goal].forEach((p, i) => {
    ctx.fillStyle = i ? "#2a8c6d" : "#2364aa";
    ctx.beginPath();
    ctx.arc(ox + (p[0] + 0.5) * size, oy + (p[1] + 0.5) * size, size * 0.3, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawSamplingLab() {
  const count = Number(sampleCount.value);
  sampleCountLabel.textContent = String(count);
  samplingReadout.innerHTML = `<strong>PRM/RRT intuition</strong>
    <p>${count} deterministic samples are shown. Edges connect nearby free samples when the straight segment is obstacle-free.</p>
    <p>Sampling planners trade exact coverage for practical exploration of high-dimensional spaces.</p>`;
  const { ctx, w, h } = setupCanvas(samplingCanvas);
  grid(ctx, w, h);
  const obstacles = [
    { x: w * 0.45, y: h * 0.42, r: 48 },
    { x: w * 0.63, y: h * 0.66, r: 38 }
  ];
  obstacles.forEach((o) => {
    ctx.fillStyle = "rgba(22, 32, 42, 0.82)";
    ctx.beginPath();
    ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
    ctx.fill();
  });
  function free(p) {
    return obstacles.every((o) => Math.hypot(p.x - o.x, p.y - o.y) > o.r + 8);
  }
  const pts = [];
  for (let i = 0; pts.length < count && i < count * 4; i += 1) {
    const p = { x: 34 + ((i * 83) % Math.floor(w - 68)), y: 32 + ((i * 137) % Math.floor(h - 64)) };
    if (free(p)) pts.push(p);
  }
  ctx.strokeStyle = "rgba(35, 100, 170, 0.34)";
  ctx.lineWidth = 1.5;
  pts.forEach((a, i) => {
    pts.slice(i + 1).forEach((b) => {
      if (Math.hypot(a.x - b.x, a.y - b.y) < 95) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    });
  });
  pts.forEach((p) => {
    ctx.fillStyle = "#2364aa";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawPotentialField() {
  const { ctx, w, h } = setupCanvas(potentialCanvas);
  grid(ctx, w, h);
  const goal = { x: w - 80, y: 72 };
  const obs = { x: w * 0.48, y: h * 0.52, r: 50 };
  ctx.fillStyle = "rgba(22, 32, 42, 0.82)";
  ctx.beginPath();
  ctx.arc(obs.x, obs.y, obs.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#2a8c6d";
  ctx.beginPath();
  ctx.arc(goal.x, goal.y, 11, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#2364aa";
  ctx.lineWidth = 2;
  for (let x = 60; x < w - 40; x += 58) {
    for (let y = 52; y < h - 34; y += 50) {
      const att = { x: goal.x - x, y: goal.y - y };
      const od = { x: x - obs.x, y: y - obs.y };
      const d = Math.max(35, Math.hypot(od.x, od.y));
      const rep = d < 120 ? { x: (od.x / d) * (120 - d) * 2.4, y: (od.y / d) * (120 - d) * 2.4 } : { x: 0, y: 0 };
      const v = { x: att.x * 0.04 + rep.x, y: att.y * 0.04 + rep.y };
      const mag = Math.max(1, Math.hypot(v.x, v.y));
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (v.x / mag) * 18, y + (v.y / mag) * 18);
      ctx.stroke();
    }
  }
  ctx.fillStyle = "#5a6875";
  ctx.fillText("goal attracts; obstacle repels", 28, 34);
}

function renderChapter11Concepts() {
  const el = document.querySelector("#chapter11Concepts");
  el.innerHTML = chapter11Concepts.map((item, index) => `
    <article class="concept-card">
      <h3>${index + 1}. ${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function plotSeries(ctx, series, color, left, right, top, bottom, maxAbs = 1.2) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  series.forEach((v, i) => {
    const x = left + (i / (series.length - 1)) * (right - left);
    const y = bottom - ((v + maxAbs) / (2 * maxAbs)) * (bottom - top);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();
}

function drawVelocityControlLab() {
  const mode = velocityController.value;
  const kp = Number(velKp.value);
  const ki = Number(velKi.value);
  const bias = Number(velBias.value);
  velKpLabel.textContent = fmt(kp);
  velKiLabel.textContent = fmt(ki);
  velBiasLabel.textContent = fmt(bias);
  const dt = 0.025;
  const steps = 260;
  let theta = -0.75;
  let integral = 0;
  const target = 0.75;
  const desiredVelocity = mode === "ffpi" ? 0.18 : 0;
  const thetaSeries = [];
  const errorSeries = [];
  const commandSeries = [];
  for (let i = 0; i < steps; i += 1) {
    const t = i * dt;
    const desired = mode === "ffpi" ? Math.min(target, -0.75 + desiredVelocity * t) : target;
    const error = desired - theta;
    integral += error * dt;
    const integralTerm = mode === "p" ? 0 : ki * integral;
    const command = desiredVelocity + kp * error + integralTerm;
    theta += (command - bias) * dt;
    thetaSeries.push(theta);
    errorSeries.push(error);
    commandSeries.push(command);
  }
  const finalError = errorSeries[errorSeries.length - 1];
  velocityReadout.innerHTML = `<strong>${velocityController.options[velocityController.selectedIndex].text}</strong>
    <p>final error = ${fmt(finalError)}, final command = ${fmt(commandSeries[commandSeries.length - 1])} rad/s.</p>
    <p>${mode === "p" ? "P velocity feedback gives first-order decay but a constant bias can leave steady-state error." : mode === "pi" ? "PI feedback adds an integral state that can remove constant-bias steady-state error." : "Feedforward moves along the planned trend while PI feedback corrects tracking error."}</p>`;
  const { ctx, w, h } = setupCanvas(velocityCanvas);
  grid(ctx, w, h);
  const left = 48;
  const right = w - 28;
  const top = 34;
  const bottom = h - 44;
  ctx.strokeStyle = "#16202a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(left, bottom);
  ctx.lineTo(right, bottom);
  ctx.moveTo(left, top);
  ctx.lineTo(left, bottom);
  ctx.stroke();
  plotSeries(ctx, thetaSeries, "#2364aa", left, right, top, bottom);
  plotSeries(ctx, errorSeries, "#b84a3a", left, right, top, bottom);
  ctx.strokeStyle = "#2a8c6d";
  ctx.setLineDash([6, 5]);
  ctx.beginPath();
  const targetY = bottom - ((target + 1.2) / 2.4) * (bottom - top);
  ctx.moveTo(left, targetY);
  ctx.lineTo(right, targetY);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "#5a6875";
  ctx.fillText("blue theta, red error, green desired", left + 10, top + 18);
}

function drawTorqueControlLab() {
  const mode = torqueController.value;
  const kp = Number(torqueKp.value);
  const kd = Number(torqueKd.value);
  const accuracy = Number(modelAccuracy.value) / 100;
  torqueKpLabel.textContent = String(kp);
  torqueKdLabel.textContent = String(kd);
  modelAccuracyLabel.textContent = `${Math.round(accuracy * 100)}%`;
  const dt = 0.018;
  const steps = 320;
  const mTrue = 1.25;
  const bTrue = 0.38;
  const gravity = 0.72;
  const target = 1;
  let q = -0.65;
  let qd = 0;
  let integral = 0;
  const qSeries = [];
  const tauSeries = [];
  for (let i = 0; i < steps; i += 1) {
    const e = target - q;
    const ed = -qd;
    integral += e * dt;
    const feedback = kp * e + kd * ed + (mode === "pid" ? 3.4 * integral : 0);
    const feedforward = mode === "computed" ? accuracy * (gravity + bTrue * qd) : 0;
    const tau = feedback + feedforward;
    const qdd = (tau - bTrue * qd - gravity) / mTrue;
    qd += qdd * dt;
    q += qd * dt;
    qSeries.push(q);
    tauSeries.push(tau / 55);
  }
  const finalError = target - qSeries[qSeries.length - 1];
  const maxTorque = Math.max(...tauSeries.map((v) => Math.abs(v * 55)));
  torqueReadout.innerHTML = `<strong>${torqueController.options[torqueController.selectedIndex].text}</strong>
    <p>final error = ${fmt(finalError)}, peak effort about ${fmt(maxTorque)} Nm.</p>
    <p>${mode === "computed" ? "Computed torque uses a model to cancel known dynamics, so the feedback loop sees a simpler plant." : mode === "pid" ? "PID can reject constant disturbances, but the integral term must be managed to avoid windup." : "PD shapes second-order error dynamics, but gravity or other constant loads can leave offset."}</p>`;
  const { ctx, w, h } = setupCanvas(torqueCanvas);
  grid(ctx, w, h);
  const left = 48;
  const right = w - 28;
  const top = 34;
  const bottom = h - 44;
  plotSeries(ctx, qSeries, "#2364aa", left, right, top, bottom, 1.25);
  plotSeries(ctx, tauSeries, "#d39b25", left, right, top, bottom, 1.25);
  ctx.strokeStyle = "#2a8c6d";
  ctx.setLineDash([6, 5]);
  ctx.beginPath();
  const targetY = bottom - ((target + 1.25) / 2.5) * (bottom - top);
  ctx.moveTo(left, targetY);
  ctx.lineTo(right, targetY);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "#5a6875";
  ctx.fillText("blue q, yellow scaled torque, green target", left + 10, top + 18);
}

function drawContactControlLab() {
  const mode = contactMode.value;
  const stiffness = Number(contactStiffness.value);
  const damping = Number(contactDamping.value);
  const force = Number(desiredForce.value);
  contactStiffnessLabel.textContent = String(stiffness);
  contactDampingLabel.textContent = String(damping);
  desiredForceLabel.textContent = String(force);
  const compression = mode === "force" ? force / Math.max(12, stiffness) : mode === "hybrid" ? force / Math.max(20, stiffness) : (95 - damping) / 120;
  const normalForce = stiffness * compression;
  const tangentialMotion = mode === "force" ? 0.1 : mode === "hybrid" ? 0.82 : 0.48;
  contactReadout.innerHTML = `<strong>${contactMode.options[contactMode.selectedIndex].text}</strong>
    <p>normal force estimate = ${fmt(normalForce)} N, tangential motion authority = ${fmt(tangentialMotion)}.</p>
    <p>${mode === "force" ? "Pure force control regulates the constrained direction and gives up precise position there." : mode === "hybrid" ? "Hybrid control pushes normal to the surface while moving freely along the tangent direction." : "Impedance/admittance makes contact compliant by choosing an effective stiffness, damping, and motion-force relation."}</p>`;
  const { ctx, w, h } = setupCanvas(contactCanvas);
  grid(ctx, w, h);
  const wallX = w * 0.68;
  const baseY = h * 0.58;
  const toolX = wallX - 42 - compression * 48;
  ctx.fillStyle = "#16202a";
  ctx.fillRect(wallX, 42, 18, h - 80);
  ctx.fillStyle = "rgba(35, 100, 170, 0.16)";
  ctx.fillRect(wallX + 18, 42, w - wallX - 44, h - 80);
  ctx.strokeStyle = "#2364aa";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(80, baseY + 48);
  ctx.lineTo(toolX - 96, baseY - 16);
  ctx.lineTo(toolX, baseY);
  ctx.stroke();
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#16202a";
  ctx.lineWidth = 3;
  [80, toolX - 96, toolX].forEach((x, i) => {
    const y = i === 0 ? baseY + 48 : i === 1 ? baseY - 16 : baseY;
    ctx.beginPath();
    ctx.arc(x, y, i === 2 ? 13 : 11, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
  ctx.strokeStyle = "#b84a3a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(toolX + 12, baseY);
  ctx.lineTo(wallX - 5, baseY);
  ctx.stroke();
  ctx.strokeStyle = "#2a8c6d";
  ctx.beginPath();
  ctx.moveTo(wallX - 34, baseY + 68);
  ctx.lineTo(wallX - 34 + tangentialMotion * 130, baseY + 68);
  ctx.stroke();
  ctx.fillStyle = "#5a6875";
  ctx.fillText("red normal force direction", 30, 34);
  ctx.fillText("green free-motion direction", 30, 54);
  if (mode === "impedance") {
    ctx.strokeStyle = "#d39b25";
    ctx.lineWidth = 2;
    for (let i = 0; i < 7; i += 1) {
      const x = toolX + 16 + i * 11;
      ctx.beginPath();
      ctx.moveTo(x, baseY - 24);
      ctx.lineTo(x + 6, baseY + 24);
      ctx.stroke();
    }
  }
}

function renderChapter12Concepts() {
  const el = document.querySelector("#chapter12Concepts");
  el.innerHTML = chapter12Concepts.map((item, index) => `
    <article class="concept-card">
      <h3>${index + 1}. ${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function drawArrow(ctx, from, to, color = "#2364aa", width = 3) {
  const angle = Math.atan2(to.y - from.y, to.x - from.x);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(to.x, to.y);
  ctx.lineTo(to.x - 11 * Math.cos(angle - 0.45), to.y - 11 * Math.sin(angle - 0.45));
  ctx.lineTo(to.x - 11 * Math.cos(angle + 0.45), to.y - 11 * Math.sin(angle + 0.45));
  ctx.closePath();
  ctx.fill();
}

function drawContactKinematicsLab() {
  const mode = contactTwistMode.value;
  const vn = Number(normalVelocity.value);
  const vt = Number(tangentVelocity.value);
  normalVelocityLabel.textContent = fmt(vn);
  tangentVelocityLabel.textContent = fmt(vt);
  let label = "rolling / sticking";
  let note = "The contact is maintained and the relative contact-point velocity is zero.";
  if (vn > 0.05) {
    label = "breaking free";
    note = "Positive normal separation means the contact can open.";
  } else if (vn < -0.05) {
    label = "penetrating attempt";
    note = "Negative normal velocity violates impenetrability, so a feasible motion or force must prevent it.";
  } else if (Math.abs(vt) > 0.05) {
    label = "sliding";
    note = "Normal contact is maintained, but tangential relative velocity is nonzero.";
  }
  contactKinematicsReadout.innerHTML = `<strong>${label}</strong>
    <p>relative velocity = ${fmt(vn)} n + ${fmt(vt)} t.</p>
    <p>${note}</p>`;
  const { ctx, w, h } = setupCanvas(contactKinematicsCanvas);
  grid(ctx, w, h);
  const tableY = h * 0.64;
  const block = { x: w * 0.44 + vt * 52, y: tableY - 78 - Math.max(0, vn) * 48 };
  ctx.fillStyle = "#16202a";
  ctx.fillRect(70, tableY + 28, w - 140, 14);
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#2364aa";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.roundRect(block.x - 70, block.y - 45, 140, 90, 8);
  ctx.fill();
  ctx.stroke();
  const contact = { x: block.x, y: block.y + 45 };
  drawArrow(ctx, contact, { x: contact.x, y: contact.y - 72 }, "#b84a3a", 4);
  drawArrow(ctx, contact, { x: contact.x + 72, y: contact.y }, "#2a8c6d", 4);
  drawArrow(ctx, contact, { x: contact.x + vt * 90, y: contact.y - vn * 90 }, "#d39b25", 5);
  ctx.fillStyle = "#5a6875";
  ctx.fillText("red normal n, green tangent t, yellow relative contact velocity", 28, 34);
}

function drawFrictionConeLab() {
  const mu = Number(frictionMu.value);
  const fn = Number(normalForce.value);
  const offset = Number(contactOffset.value);
  frictionMuLabel.textContent = fmt(mu);
  normalForceLabel.textContent = String(fn);
  contactOffsetLabel.textContent = fmt(offset);
  const alpha = Math.atan(mu);
  const ftMax = mu * fn;
  const momentEdge = offset * ftMax;
  frictionReadout.innerHTML = `<strong>friction angle = ${fmt((alpha * 180) / Math.PI)} deg</strong>
    <p>|ft| <= mu fn = ${fmt(ftMax)} N, so the contact force must stay inside the cone.</p>
    <p>At this planar contact offset, the cone edges create moment magnitudes near ${fmt(Math.abs(momentEdge))} in wrench space.</p>`;
  const { ctx, w, h } = setupCanvas(frictionCanvas);
  grid(ctx, w, h);
  const origin = { x: w * 0.33, y: h * 0.68 };
  const coneH = 150;
  const coneW = Math.tan(alpha) * coneH;
  ctx.strokeStyle = "#16202a";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(origin.x - 95, origin.y);
  ctx.lineTo(origin.x + 95, origin.y);
  ctx.stroke();
  ctx.fillStyle = "rgba(211, 155, 37, 0.18)";
  ctx.beginPath();
  ctx.moveTo(origin.x, origin.y);
  ctx.lineTo(origin.x - coneW, origin.y - coneH);
  ctx.lineTo(origin.x + coneW, origin.y - coneH);
  ctx.closePath();
  ctx.fill();
  drawArrow(ctx, origin, { x: origin.x, y: origin.y - coneH * 0.92 }, "#2364aa", 4);
  drawArrow(ctx, origin, { x: origin.x + coneW * 0.82, y: origin.y - coneH * 0.82 }, "#b84a3a", 4);
  ctx.fillStyle = "#16202a";
  ctx.fillText("friction cone", origin.x - 42, origin.y - coneH - 10);
  const wx = w * 0.66;
  const wy = h * 0.54;
  ctx.strokeStyle = "#d6dee6";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(wx - 120, wy);
  ctx.lineTo(wx + 120, wy);
  ctx.moveTo(wx, wy + 100);
  ctx.lineTo(wx, wy - 120);
  ctx.stroke();
  const rays = [
    { x: wx + momentEdge * 2.2, y: wy - fn * 1.15 },
    { x: wx - momentEdge * 2.2, y: wy - fn * 1.15 }
  ];
  drawArrow(ctx, { x: wx, y: wy }, rays[0], "#2a8c6d", 4);
  drawArrow(ctx, { x: wx, y: wy }, rays[1], "#2a8c6d", 4);
  ctx.fillStyle = "#5a6875";
  ctx.fillText("right: planar wrench-cone edge sketch", wx - 110, wy + 124);
}

function closureContacts(layout, spread) {
  if (layout === "two") {
    return [
      { a: Math.PI, p: { x: -100, y: 0 } },
      { a: 0, p: { x: 100, y: 0 } }
    ];
  }
  if (layout === "three") {
    return [210, -30, 90].map((deg) => ({ a: degToRad(deg), p: { x: Math.cos(degToRad(deg)) * spread, y: Math.sin(degToRad(deg)) * spread } }));
  }
  return [45, 135, 225, 315].map((deg) => ({ a: degToRad(deg), p: { x: Math.cos(degToRad(deg)) * spread, y: Math.sin(degToRad(deg)) * spread } }));
}

function drawClosureLab() {
  const layout = graspLayout.value;
  const spread = Number(graspSpread.value);
  graspSpreadLabel.textContent = String(spread);
  const contacts = closureContacts(layout, spread);
  const rank = layout === "two" ? 2 : 3;
  const status = layout === "four" ? "first-order form closure likely" : layout === "three" ? "force closure depends on friction and force limits" : "not form closure";
  closureReadout.innerHTML = `<strong>${status}</strong>
    <p>contacts = ${contacts.length}, planar wrench rank sketch = ${rank} of 3.</p>
    <p>${layout === "two" ? "Two opposite frictionless normals cannot resist every planar twist or wrench." : layout === "three" ? "Three frictional contacts can span richer wrench cones, but quality depends on cone width and geometry." : "Four well-placed point contacts are the classic planar first-order form-closure count."}</p>`;
  const { ctx, w, h } = setupCanvas(closureCanvas);
  grid(ctx, w, h);
  const c = { x: w * 0.36, y: h * 0.54 };
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#16202a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.roundRect(c.x - 82, c.y - 58, 164, 116, 12);
  ctx.fill();
  ctx.stroke();
  contacts.forEach((contact, i) => {
    const p = { x: c.x + contact.p.x, y: c.y - contact.p.y };
    const inward = { x: p.x - Math.cos(contact.a) * 58, y: p.y + Math.sin(contact.a) * 58 };
    ctx.fillStyle = ["#2364aa", "#2a8c6d", "#d39b25", "#b84a3a"][i % 4];
    ctx.beginPath();
    ctx.arc(p.x, p.y, 9, 0, Math.PI * 2);
    ctx.fill();
    drawArrow(ctx, p, inward, ctx.fillStyle, 4);
  });
  const wx = w * 0.72;
  const wy = h * 0.55;
  ctx.strokeStyle = "#d6dee6";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(wx, wy, 86, 0, Math.PI * 2);
  ctx.moveTo(wx - 104, wy);
  ctx.lineTo(wx + 104, wy);
  ctx.moveTo(wx, wy - 104);
  ctx.lineTo(wx, wy + 104);
  ctx.stroke();
  contacts.forEach((contact, i) => {
    const len = layout === "two" ? 64 : layout === "three" ? 78 : 90;
    const angle = contact.a + Math.PI;
    drawArrow(ctx, { x: wx, y: wy }, { x: wx + Math.cos(angle) * len, y: wy - Math.sin(angle) * len }, ["#2364aa", "#2a8c6d", "#d39b25", "#b84a3a"][i % 4], 3);
  });
  ctx.fillStyle = "#5a6875";
  ctx.fillText("object contacts", c.x - 54, 34);
  ctx.fillText("wrench direction sketch", wx - 76, 34);
}

function renderChapter13Concepts() {
  const el = document.querySelector("#chapter13Concepts");
  el.innerHTML = chapter13Concepts.map((item, index) => `
    <article class="concept-card">
      <h3>${index + 1}. ${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function drawMobileBase(ctx, x, y, heading, color = "#2364aa", scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-heading);
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.roundRect(-42 * scale, -30 * scale, 84 * scale, 60 * scale, 8 * scale);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fillRect(-34 * scale, -38 * scale, 20 * scale, 8 * scale);
  ctx.fillRect(14 * scale, -38 * scale, 20 * scale, 8 * scale);
  ctx.fillRect(-34 * scale, 30 * scale, 20 * scale, 8 * scale);
  ctx.fillRect(14 * scale, 30 * scale, 20 * scale, 8 * scale);
  ctx.beginPath();
  ctx.moveTo(42 * scale, 0);
  ctx.lineTo(20 * scale, -12 * scale);
  ctx.lineTo(20 * scale, 12 * scale);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawOmniLab() {
  const vx = Number(omniVx.value);
  const vy = Number(omniVy.value);
  const omega = Number(omniOmega.value);
  omniVxLabel.textContent = fmt(vx);
  omniVyLabel.textContent = fmt(vy);
  omniOmegaLabel.textContent = fmt(omega);
  const L = 0.7;
  const r = 0.12;
  const wheelSpeeds = [
    (vx - vy - L * omega) / r,
    (vx + vy + L * omega) / r,
    (vx + vy - L * omega) / r,
    (vx - vy + L * omega) / r
  ];
  const maxAbs = Math.max(1, ...wheelSpeeds.map(Math.abs));
  omniReadout.innerHTML = `<strong>mecanum wheel-speed sketch</strong>
    <p>u = (${wheelSpeeds.map(fmt).join(", ")}) rad/s.</p>
    <p>Forward motion makes all speeds similar; sideways motion flips signs across the diagonal; yaw flips left/right pairs.</p>`;
  const { ctx, w, h } = setupCanvas(omniCanvas);
  grid(ctx, w, h);
  const c = { x: w * 0.36, y: h * 0.54 };
  drawMobileBase(ctx, c.x, c.y, 0, "#2364aa", 1.25);
  drawArrow(ctx, c, { x: c.x + vx * 92, y: c.y - vy * 92 }, "#2a8c6d", 4);
  ctx.strokeStyle = "#b84a3a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(c.x, c.y, 70, -0.3, -0.3 - omega * 2.2, omega < 0);
  ctx.stroke();
  const wheelPts = [
    { x: c.x - 72, y: c.y - 54 },
    { x: c.x + 72, y: c.y - 54 },
    { x: c.x - 72, y: c.y + 54 },
    { x: c.x + 72, y: c.y + 54 }
  ];
  wheelPts.forEach((p, i) => {
    const len = (wheelSpeeds[i] / maxAbs) * 48;
    drawArrow(ctx, p, { x: p.x, y: p.y - len }, wheelSpeeds[i] >= 0 ? "#2a8c6d" : "#b84a3a", 3);
  });
  const bx = w * 0.72;
  const baseY = h - 54;
  wheelSpeeds.forEach((speed, i) => {
    const x = bx + (i - 1.5) * 44;
    const bar = (speed / maxAbs) * 92;
    ctx.fillStyle = speed >= 0 ? "#2a8c6d" : "#b84a3a";
    ctx.fillRect(x - 14, baseY - Math.max(0, bar), 28, Math.abs(bar));
    ctx.fillStyle = "#16202a";
    ctx.fillText(`u${i + 1}`, x - 10, baseY + 22);
  });
  ctx.fillStyle = "#5a6875";
  ctx.fillText("green vector: desired body translation, red arc: yaw", 28, 34);
}

function nonholonomicPath(mode, v, omega) {
  const dt = 0.08;
  const path = [{ x: 0, y: 0, phi: 0 }];
  let state = { x: 0, y: 0, phi: 0 };
  const commands = mode === "bracket"
    ? [[v, 0, 18], [0, omega, 18], [-v, 0, 18], [0, -omega, 18]]
    : mode === "spin"
      ? [[0, omega, 70]]
      : [[v, omega, 70]];
  commands.forEach(([cv, cw, count]) => {
    for (let i = 0; i < count; i += 1) {
      state = {
        x: state.x + cv * Math.cos(state.phi) * dt,
        y: state.y + cv * Math.sin(state.phi) * dt,
        phi: state.phi + cw * dt
      };
      path.push({ ...state });
    }
  });
  return path;
}

function drawNonholonomicLab() {
  const mode = nonholonomicMode.value;
  const v = Number(mobileSpeed.value);
  const omega = Number(mobileTurn.value);
  mobileSpeedLabel.textContent = fmt(v);
  mobileTurnLabel.textContent = fmt(omega);
  const path = nonholonomicPath(mode, v, omega || 0.01);
  const end = path[path.length - 1];
  nonholonomicReadout.innerHTML = `<strong>${nonholonomicMode.options[nonholonomicMode.selectedIndex].text}</strong>
    <p>end pose approx (phi, x, y) = (${fmt(end.phi)}, ${fmt(end.x)}, ${fmt(end.y)}).</p>
    <p>${mode === "bracket" ? "The bracket sequence produces sideways displacement even though no sideways velocity was commanded." : mode === "spin" ? "Spinning changes heading without translating, as differential-drive robots can do." : "The instantaneous velocity points along the robot heading, so the path curves rather than moving sideways."}</p>`;
  const { ctx, w, h } = setupCanvas(nonholonomicCanvas);
  grid(ctx, w, h);
  const origin = { x: w * 0.28, y: h * 0.62 };
  const scale = 115;
  ctx.strokeStyle = "#2364aa";
  ctx.lineWidth = 4;
  ctx.beginPath();
  path.forEach((p, i) => {
    const x = origin.x + p.x * scale;
    const y = origin.y - p.y * scale;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();
  const start = path[0];
  drawMobileBase(ctx, origin.x + start.x * scale, origin.y - start.y * scale, start.phi, "#5a6875", 0.75);
  drawMobileBase(ctx, origin.x + end.x * scale, origin.y - end.y * scale, end.phi, "#b84a3a", 0.9);
  drawArrow(ctx, { x: w * 0.68, y: h * 0.58 }, { x: w * 0.80, y: h * 0.58 }, "#2364aa", 4);
  ctx.strokeStyle = "#b84a3a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(w * 0.68, h * 0.58, 48, -0.5, -1.6, true);
  ctx.stroke();
  ctx.fillStyle = "#5a6875";
  ctx.fillText("controls: forward v and yaw omega; no direct body vy", 28, 34);
}

function integrateDiffDrive(steps, biasL = 0, biasR = 0) {
  const r = 0.08;
  const d = 0.28;
  const dt = 0.08;
  let truePose = { x: 0, y: 0, phi: 0 };
  let odomPose = { x: 0, y: 0, phi: 0 };
  const truePath = [];
  const odomPath = [];
  for (let i = 0; i < steps; i += 1) {
    const uL = 5.0 + 1.1 * Math.sin(i / 16);
    const uR = 5.6 - 0.9 * Math.sin(i / 18);
    const pairs = [
      [truePose, uL, uR],
      [odomPose, uL * (1 + biasL), uR * (1 + biasR)]
    ];
    pairs.forEach(([pose, left, right]) => {
      const v = (r / 2) * (left + right);
      const omega = (r / (2 * d)) * (right - left);
      pose.x += v * Math.cos(pose.phi) * dt;
      pose.y += v * Math.sin(pose.phi) * dt;
      pose.phi += omega * dt;
    });
    truePath.push({ ...truePose });
    odomPath.push({ ...odomPose });
  }
  return { truePath, odomPath };
}

function drawOdometryLab() {
  const lb = Number(leftBias.value) / 100;
  const rb = Number(rightBias.value) / 100;
  const steps = Number(odomSteps.value);
  leftBiasLabel.textContent = `${Number(leftBias.value)}%`;
  rightBiasLabel.textContent = `${Number(rightBias.value)}%`;
  odomStepsLabel.textContent = String(steps);
  const { truePath, odomPath } = integrateDiffDrive(steps, lb, rb);
  const a = truePath[truePath.length - 1];
  const b = odomPath[odomPath.length - 1];
  const drift = Math.hypot(a.x - b.x, a.y - b.y);
  odometryReadout.innerHTML = `<strong>dead-reckoning drift</strong>
    <p>true end = (${fmt(a.x)}, ${fmt(a.y)}), odom end = (${fmt(b.x)}, ${fmt(b.y)}).</p>
    <p>pose drift from wheel bias is about ${fmt(drift)} m before any external correction.</p>`;
  const { ctx, w, h } = setupCanvas(odometryCanvas);
  grid(ctx, w, h);
  const origin = { x: 64, y: h * 0.76 };
  const scale = 128;
  function plot(path, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    path.forEach((p, i) => {
      const x = origin.x + p.x * scale;
      const y = origin.y - p.y * scale;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }
  plot(truePath, "#2364aa");
  plot(odomPath, "#b84a3a");
  drawMobileBase(ctx, origin.x + a.x * scale, origin.y - a.y * scale, a.phi, "#2364aa", 0.75);
  drawMobileBase(ctx, origin.x + b.x * scale, origin.y - b.y * scale, b.phi, "#b84a3a", 0.75);
  ctx.fillStyle = "#5a6875";
  ctx.fillText("blue true model, red encoder-biased odometry", 28, 34);
}

function renderAppendixAConcepts() {
  const el = document.querySelector("#appendixAConcepts");
  el.innerHTML = appendixAConcepts.map((item, index) => `
    <article class="concept-card">
      <h3>${index + 1}. ${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function drawFormulaExplorer() {
  const topic = formulaTopics[formulaTopic.value];
  const detail = Number(formulaDetail.value);
  formulaDetailLabel.textContent = String(detail);
  formulaReadout.innerHTML = `<strong>${topic.chapter}: ${topic.label}</strong>
    <p><code>${topic.formula}</code></p>
    <p><b>Question:</b> ${topic.question}</p>
    <p>${detail >= 4 ? topic.note : "Raise the detail level for the practical usage note."}</p>`;
  const { ctx, w, h } = setupCanvas(formulaCanvas);
  grid(ctx, w, h);
  const nodes = [
    { key: "dof", x: 0.14, y: 0.26, label: "config" },
    { key: "so3", x: 0.32, y: 0.18, label: "SO(3)" },
    { key: "se3", x: 0.50, y: 0.20, label: "SE(3)" },
    { key: "poe", x: 0.68, y: 0.28, label: "PoE" },
    { key: "jacobian", x: 0.78, y: 0.50, label: "J" },
    { key: "dynamics", x: 0.63, y: 0.72, label: "tau" },
    { key: "trajectory", x: 0.40, y: 0.74, label: "s(t)" },
    { key: "control", x: 0.22, y: 0.64, label: "control" },
    { key: "contact", x: 0.20, y: 0.46, label: "contact" },
    { key: "mobile", x: 0.50, y: 0.48, label: "mobile" }
  ];
  const edges = [
    ["dof", "so3"], ["so3", "se3"], ["se3", "poe"], ["poe", "jacobian"],
    ["jacobian", "dynamics"], ["trajectory", "control"], ["control", "dynamics"],
    ["contact", "control"], ["mobile", "jacobian"], ["mobile", "control"]
  ];
  const map = Object.fromEntries(nodes.map((n) => [n.key, { ...n, px: n.x * w, py: n.y * h }]));
  edges.forEach(([a, b]) => {
    const pa = map[a];
    const pb = map[b];
    ctx.strokeStyle = a === formulaTopic.value || b === formulaTopic.value ? "#b84a3a" : "#d6dee6";
    ctx.lineWidth = a === formulaTopic.value || b === formulaTopic.value ? 4 : 2;
    ctx.beginPath();
    ctx.moveTo(pa.px, pa.py);
    ctx.lineTo(pb.px, pb.py);
    ctx.stroke();
  });
  nodes.forEach((node) => {
    const active = node.key === formulaTopic.value;
    ctx.fillStyle = active ? "#b84a3a" : "#fff";
    ctx.strokeStyle = active ? "#b84a3a" : "#2364aa";
    ctx.lineWidth = active ? 4 : 3;
    ctx.beginPath();
    ctx.arc(map[node.key].px, map[node.key].py, active ? 34 : 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = active ? "#fff" : "#16202a";
    ctx.textAlign = "center";
    ctx.fillText(node.label, map[node.key].px, map[node.key].py + 4);
  });
  ctx.textAlign = "start";
  ctx.fillStyle = "#5a6875";
  ctx.fillText("formula families as a robotics dependency map", 28, 34);
}

function renderAppendixBConcepts() {
  const el = document.querySelector("#appendixBConcepts");
  el.innerHTML = appendixBConcepts.map((item, index) => `
    <article class="concept-card">
      <h3>${index + 1}. ${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function matMul3(a, b) {
  return a.map((row, i) => row.map((_, j) => a[i][0] * b[0][j] + a[i][1] * b[1][j] + a[i][2] * b[2][j]));
}

function rotX3(t) {
  const c = Math.cos(t);
  const s = Math.sin(t);
  return [[1, 0, 0], [0, c, -s], [0, s, c]];
}

function rotY3(t) {
  const c = Math.cos(t);
  const s = Math.sin(t);
  return [[c, 0, s], [0, 1, 0], [-s, 0, c]];
}

function rotZ3(t) {
  const c = Math.cos(t);
  const s = Math.sin(t);
  return [[c, -s, 0], [s, c, 0], [0, 0, 1]];
}

function rotationState() {
  const a = degToRad(Number(rotAlpha.value));
  const b = degToRad(Number(rotBeta.value));
  const g = degToRad(Number(rotGamma.value));
  const R = matMul3(matMul3(rotZ3(a), rotY3(b)), rotX3(g));
  const trace = R[0][0] + R[1][1] + R[2][2];
  const qw = Math.max(0, Math.sqrt(Math.max(0, 1 + trace)) / 2);
  const denom = Math.max(0.0001, 4 * qw);
  const q = [
    qw,
    (R[2][1] - R[1][2]) / denom,
    (R[0][2] - R[2][0]) / denom,
    (R[1][0] - R[0][1]) / denom
  ];
  const theta = Math.acos(Math.max(-1, Math.min(1, (trace - 1) / 2)));
  const scale = Math.abs(Math.sin(theta)) < 0.0001 ? 0 : Math.tan(theta / 2) / (2 * Math.sin(theta));
  const cayley = [
    (R[2][1] - R[1][2]) * scale,
    (R[0][2] - R[2][0]) * scale,
    (R[1][0] - R[0][1]) * scale
  ];
  return { a, b, g, R, q, cayley, trace, theta };
}

function project3d(p, w, h) {
  const distance = 4.2;
  const s = 92 / (distance - p.z);
  return { x: w * 0.58 + p.x * s, y: h * 0.53 - p.y * s };
}

function transformPoint(R, p) {
  return {
    x: R[0][0] * p.x + R[0][1] * p.y + R[0][2] * p.z,
    y: R[1][0] * p.x + R[1][1] * p.y + R[1][2] * p.z,
    z: R[2][0] * p.x + R[2][1] * p.y + R[2][2] * p.z
  };
}

function drawRotationRepresentationLab() {
  const state = rotationState();
  const rep = rotationRep.value;
  rotAlphaLabel.textContent = `${Number(rotAlpha.value)} deg`;
  rotBetaLabel.textContent = `${Number(rotBeta.value)} deg`;
  rotGammaLabel.textContent = `${Number(rotGamma.value)} deg`;
  const singular = Math.abs(Math.abs(Number(rotBeta.value)) - 90) < 3;
  const details = {
    zyx: `ZYX Euler: alpha, beta, gamma = (${Number(rotAlpha.value)}, ${Number(rotBeta.value)}, ${Number(rotGamma.value)}) degrees.`,
    rpy: "XYZ roll-pitch-yaw gives the same matrix product when interpreted as fixed-frame x, then y, then z rotations.",
    quat: `unit quaternion q = (${state.q.map(fmt).join(", ")}), with q and -q representing the same rotation.`,
    cayley: state.trace < -0.95 ? "Cayley-Rodrigues is near its 180-degree singularity." : `Cayley-Rodrigues r = (${state.cayley.map(fmt).join(", ")}).`
  };
  rotationRepReadout.innerHTML = `<strong>${rotationRep.options[rotationRep.selectedIndex].text}</strong>
    ${matrixHtml(state.R.map((row) => row.map(fmt)))}
    <p>${details[rep]}</p>
    <p>${singular ? "Beta is close to the ZYX Euler singularity: alpha and gamma start to trade off." : "This orientation is away from the ZYX beta = +/-90 degree singularity."}</p>`;
  const { ctx, w, h } = setupCanvas(rotationRepCanvas);
  grid(ctx, w, h);
  const verts = [
    { x: -1, y: -1, z: -1 }, { x: 1, y: -1, z: -1 }, { x: 1, y: 1, z: -1 }, { x: -1, y: 1, z: -1 },
    { x: -1, y: -1, z: 1 }, { x: 1, y: -1, z: 1 }, { x: 1, y: 1, z: 1 }, { x: -1, y: 1, z: 1 }
  ].map((p) => project3d(transformPoint(state.R, p), w, h));
  const edges = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
  ctx.strokeStyle = "#2364aa";
  ctx.lineWidth = 3;
  edges.forEach(([i, j]) => {
    ctx.beginPath();
    ctx.moveTo(verts[i].x, verts[i].y);
    ctx.lineTo(verts[j].x, verts[j].y);
    ctx.stroke();
  });
  const origin = project3d(transformPoint(state.R, { x: 0, y: 0, z: 0 }), w, h);
  [
    [{ x: 1.6, y: 0, z: 0 }, "#b84a3a", "x"],
    [{ x: 0, y: 1.6, z: 0 }, "#2a8c6d", "y"],
    [{ x: 0, y: 0, z: 1.6 }, "#d39b25", "z"]
  ].forEach(([axis, color, label]) => {
    const p = project3d(transformPoint(state.R, axis), w, h);
    drawArrow(ctx, origin, p, color, 4);
    ctx.fillStyle = color;
    ctx.fillText(label, p.x + 6, p.y);
  });
  ctx.fillStyle = "#5a6875";
  ctx.fillText("rotated body frame and cube; all representations describe this same R", 28, 34);
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
  if (active === "9") {
    drawTrajectoryLab();
    drawViaLab();
    drawPhasePlane();
  }
  if (active === "10") {
    drawPlannerLab();
    drawSamplingLab();
    drawPotentialField();
  }
  if (active === "11") {
    drawVelocityControlLab();
    drawTorqueControlLab();
    drawContactControlLab();
  }
  if (active === "12") {
    drawContactKinematicsLab();
    drawFrictionConeLab();
    drawClosureLab();
  }
  if (active === "13") {
    drawOmniLab();
    drawNonholonomicLab();
    drawOdometryLab();
  }
  if (active === "A") {
    drawFormulaExplorer();
  }
  if (active === "B") {
    drawRotationRepresentationLab();
  }
}

function applyContactTwistPreset() {
  const presets = {
    rolling: { n: 0, t: 0 },
    sliding: { n: 0, t: 0.75 },
    breaking: { n: 0.62, t: 0.25 },
    penetrating: { n: -0.55, t: -0.25 }
  };
  const preset = presets[contactTwistMode.value];
  normalVelocity.value = String(preset.n);
  tangentVelocity.value = String(preset.t);
  drawContactKinematicsLab();
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
  ],
  "9": [
    ["Spine", "#chapter9-spine"],
    ["Scaling", "#chapter9-scaling"],
    ["Via", "#chapter9-via"],
    ["Phase", "#chapter9-phase"],
    ["Check", "#chapter9-check"]
  ],
  "10": [
    ["Spine", "#chapter10-spine"],
    ["Grid", "#chapter10-grid"],
    ["Sampling", "#chapter10-sampling"],
    ["Potential", "#chapter10-potential"],
    ["Smoothing", "#chapter10-smoothing"],
    ["Check", "#chapter10-check"]
  ],
  "11": [
    ["Spine", "#chapter11-spine"],
    ["Error", "#chapter11-error"],
    ["Torque", "#chapter11-torque"],
    ["Contact", "#chapter11-contact"],
    ["Select", "#chapter11-practice"],
    ["Check", "#chapter11-check"]
  ],
  "12": [
    ["Spine", "#chapter12-spine"],
    ["Kinematics", "#chapter12-kinematics"],
    ["Friction", "#chapter12-friction"],
    ["Closure", "#chapter12-closure"],
    ["Manipulate", "#chapter12-manipulation"],
    ["Check", "#chapter12-check"]
  ],
  "13": [
    ["Spine", "#chapter13-spine"],
    ["Omni", "#chapter13-omni"],
    ["Nonholonomic", "#chapter13-nonholonomic"],
    ["Odometry", "#chapter13-odometry"],
    ["Mobile Arm", "#chapter13-mobile-manipulation"],
    ["Check", "#chapter13-check"]
  ],
  "A": [
    ["Index", "#appendixA-spine"],
    ["Explorer", "#appendixA-explorer"],
    ["Patterns", "#appendixA-patterns"],
    ["Check", "#appendixA-check"]
  ],
  "B": [
    ["Map", "#appendixB-spine"],
    ["Lab", "#appendixB-lab"],
    ["Tradeoffs", "#appendixB-tradeoffs"],
    ["Check", "#appendixB-check"]
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
[trajDuration, trajTime].forEach((input) => input.addEventListener("input", drawTrajectoryLab));
trajScaling.addEventListener("change", drawTrajectoryLab);
[viaHeight, viaEnd].forEach((input) => input.addEventListener("input", drawViaLab));
plannerMode.addEventListener("change", drawPlannerLab);
plannerGap.addEventListener("input", drawPlannerLab);
sampleCount.addEventListener("input", drawSamplingLab);
[velocityController, velKp, velKi, velBias].forEach((input) => {
  input.addEventListener("input", drawVelocityControlLab);
  input.addEventListener("change", drawVelocityControlLab);
});
[torqueController, torqueKp, torqueKd, modelAccuracy].forEach((input) => {
  input.addEventListener("input", drawTorqueControlLab);
  input.addEventListener("change", drawTorqueControlLab);
});
[contactMode, contactStiffness, contactDamping, desiredForce].forEach((input) => {
  input.addEventListener("input", drawContactControlLab);
  input.addEventListener("change", drawContactControlLab);
});
contactTwistMode.addEventListener("change", applyContactTwistPreset);
[normalVelocity, tangentVelocity].forEach((input) => {
  input.addEventListener("input", drawContactKinematicsLab);
});
[frictionMu, normalForce, contactOffset].forEach((input) => {
  input.addEventListener("input", drawFrictionConeLab);
});
[graspLayout, graspSpread].forEach((input) => {
  input.addEventListener("input", drawClosureLab);
  input.addEventListener("change", drawClosureLab);
});
[omniVx, omniVy, omniOmega].forEach((input) => {
  input.addEventListener("input", drawOmniLab);
});
[nonholonomicMode, mobileSpeed, mobileTurn].forEach((input) => {
  input.addEventListener("input", drawNonholonomicLab);
  input.addEventListener("change", drawNonholonomicLab);
});
[leftBias, rightBias, odomSteps].forEach((input) => {
  input.addEventListener("input", drawOdometryLab);
});
[formulaTopic, formulaDetail].forEach((input) => {
  input.addEventListener("input", drawFormulaExplorer);
  input.addEventListener("change", drawFormulaExplorer);
});
[rotationRep, rotAlpha, rotBeta, rotGamma].forEach((input) => {
  input.addEventListener("input", drawRotationRepresentationLab);
  input.addEventListener("change", drawRotationRepresentationLab);
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
renderChapter9Concepts();
renderGenericQuiz("#chapter9Quiz", chapter9QuizItems, "Not quite. Chapter 9 separates path geometry from timing; compare the option to that split.");
renderChapter10Concepts();
renderGenericQuiz("#chapter10Quiz", chapter10QuizItems, "Not quite. Chapter 10 is about C-space obstacles, search structures, sampling, potentials, and smoothing.");
renderChapter11Concepts();
renderGenericQuiz("#chapter11Quiz", chapter11QuizItems, "Not quite. Chapter 11 asks which signal is controlled, what error dynamics result, and how contact changes the objective.");
renderChapter12Concepts();
renderGenericQuiz("#chapter12Quiz", chapter12QuizItems, "Not quite. Chapter 12 is about contact kinematics, friction-limited wrenches, closure, and manipulation modes.");
renderChapter13Concepts();
renderGenericQuiz("#chapter13Quiz", chapter13QuizItems, "Not quite. Chapter 13 separates omnidirectional velocity control, nonholonomic reachable motion, odometry, and base-plus-arm coordination.");
renderAppendixAConcepts();
renderGenericQuiz("#appendixAQuiz", appendixAQuizItems, "Not quite. Appendix A is a formula map: identify the object being mapped, then the direction of the map.");
renderAppendixBConcepts();
renderGenericQuiz("#appendixBQuiz", appendixBQuizItems, "Not quite. Appendix B compares orientation representations; ask whether the issue is interpretation, singularity, double cover, or direct matrix action.");
setChapter("1");
drawArm();
