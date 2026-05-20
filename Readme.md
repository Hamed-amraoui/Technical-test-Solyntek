# Technical Test Solyntek

Un formulaire d'inscription permettant aux utilisateurs de créer un compte avec une validation des champs appropriée.
Un système d'authentification qui permet aux utilisateurs de se connecter à leur compte.
Un tableau de bord pour afficher les informations et les utilisateurs.

## Technologies Utilisées

- Front-end : ReactJS
- Back-end : Node.js, Express
- Base de données : MongoDB

## Fonctionnalités Principales

1. **Inscription et Validation :**
   - Formulaire d'inscription pour la création de comptes.
   - Validation des champs côté client et côté serveur.

2. **Authentification :**
   - Système d'authentification pour permettre aux utilisateurs de se connecter à leur compte.

3. **Tableau de Bord :**
   - Affichage des informations des utilisateurs.


## Installation

1. Cloner le projet
   ```bash
   git clone https://github.com/Hamed-amraoui/Technical-test-Solyntek

2. Installation des dépendances
   ```bash
   cd frontend && cd backend
   npm install


## Configuration
1. **Configuration du Back-end :**
   - Créer un fichier .env à la racine du dossier du serveur avec les détails de la base de données.
2. **Configuration du Front-end :**
   - Créer un fichier .env à la racine du dossier du client avec les détails du serveur.

## Exécution
1. Exécution du Back-end
   ```bash
      npm run start
2. Exécution du Front-end
   ```bash
      npm run start
## Deploiement AWS (Terraform + Ansible + GitHub Actions)
Le workflow CI/CD est dans `.github/workflows/deploy-aws.yml`.

### Secrets GitHub requis
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `TF_STATE_BUCKET` (bucket S3 pour le state Terraform)
- `AWS_EC2_KEY_NAME` (nom d'une key pair EC2 existante)
- `AWS_SSH_PRIVATE_KEY` (cle privee associee a la key pair)
- `JWT_SECRET`
- `SSH_INGRESS_CIDR` (optionnel, fallback `0.0.0.0/0`)

### Pipeline
1. Terraform provisionne l'instance EC2 et le security group.
2. Ansible installe Docker et Docker Compose sur l'instance.
3. Ansible deploie `frontend`, `backend`, `mongodb` via `docker-compose`.
