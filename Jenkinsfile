pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Install Node.js and npm (adjust the version as needed)
                    nodejs('node') {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'npm run deploy'
                }
            }
        }
    }
}

