pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ragavivenugopal/73772114183_React.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    def nodejsInstallation = tool 'NodeJS'
                    env.PATH = "${nodejsInstallation}/bin:${env.PATH}"
                }

  
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    def ghPagesToken = credentials('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')
                    withCredentials([string(credentialsId: ghPagesToken, variable: 'GITHUB_TOKEN')]) {
                        sh 'npm install -g gh-pages'
                        sh 'npx gh-pages -d build -u "https://${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}@github.com/ragavivenugopal/ragavivenugopal.github.io.git"'
                    }
                }
            }
        }
    }
}


