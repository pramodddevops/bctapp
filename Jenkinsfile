pipeline {
    agent any

    environment {
        AWS_REGION = 'ap-south-1'
        ECR_REPO = '659211415614.dkr.ecr.ap-south-1.amazonaws.com/bctapp'
        IMAGE_TAG = "latest"
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/pramodddevops/bctapp.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${ECR_REPO}:${IMAGE_TAG}")
                }
            }
        }
        stage('Login to ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_REPO
                '''
            }
        }
        stage('Push to ECR') {
            steps {
                script {
                    dockerImage.push()
                }
            }
        }
        stage('Deploy on EC2') {
            steps {
                sh '''
                docker rm -f bctapp || true
                docker pull $ECR_REPO:$IMAGE_TAG
                docker run -d --name bctapp -p 80:80 $ECR_REPO:$IMAGE_TAG
                '''
            }
        }
    }
}
