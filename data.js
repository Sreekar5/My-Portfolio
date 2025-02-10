const projects = [
    {
        title: "Indian English Accent Recognition",
        description: [
            "Built an Indian English Accent Recognition System using ML models (XGBoost, CNN-LSTM) to classify accents from 8 Indian states, achieving 90.02% accuracy.",
            "Utilized the Indic TTS database (IIT Madras) with 68,169 audio samples across 16 accent categories, preprocessed and augmented for robust training.",
            "Extracted MFCC features and trained models like SVM, Random Forest, and XGBoost, using stratified 10-fold cross-validation for evaluation."
        ]
    },
    {
        title: "Real-Time Attendance System",
        description: [
            "Developed an AI-driven attendance system using Haar Cascade for face detection and ResNet-50 for feature extraction, achieving 100% accuracy in normal conditions and 91.6% in occlusion/low-light scenarios.",
            "Captured face images via webcam, preprocessed using dlib for 68 facial landmarks, and stored in an SQLite database. Extracted 128 unique facial features using ResNet-50 for training and matching.",
            "Automated attendance tracking with real-time face recognition, supporting multiple faces and video processing. Integrated a Flask web app for attendance reports, enhancing efficiency in educational and corporate settings."
        ]
    },
    {
        title: "Optimizing Route of Transmission Wires",
        description: [
            "Visualized original and optimized wire routes with NetworkX and Matplotlib for clearer insights.",
            "Reduced transmission wire loss by over 15% through optimal placement of transformers using bipartite graph coloring."
        ]
    }
];

const education = [
    {
        institution: "Amrita School of Engineering",
        degree: "Bachelor of Engineering",
        major: "Electronics and Computer Engineering",
        grade: "CGPA: 7.41/10"
    },
    {
        institution: "Sri Chaitanya Junior College",
        degree: "Telangana State Board of Intermediate Education",
        grade: "Percentage: 95.7%"
    },
    {
        institution: "Sri Chaitanya Techno School",
        degree: "Board of Secondary Education",
        grade: "CGPA: 9.8/10"
    }
];

const activities = [
    {
        title: "The Quiz Club ASEB",
        role: "President",
        details: [
            "Elected as Club President. Led a team of 30+ members. Increased the membership by 30% by the end of my term.",
            "Managed and coordinated 16+ events in multiple categories. Hosted the biggest quiz event in our college during DAASTAN fest in 2023."
        ]
    },
    {
        title: "Electronics Communication and Computer Forum ASEB",
        role: "Senior Executive",
        details: [
            "Organized and conducted 10+ technical events and boosted student participation through creative activities."
        ]
    }
];