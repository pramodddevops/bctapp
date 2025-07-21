pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/pramodddevops/bctapp.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build || true' // Remove or modify if not needed
            }
        }
        stage('Restart App') {
            steps {
                // Stop any running app (customize as needed)
                sh 'pkill -f "node" || true'
                // Start the app (customize as needed)
                sh 'nohup npm start &'
            }
        }
    }
}
