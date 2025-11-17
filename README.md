# 🌍 FutureWork Communities – FIAP

Aplicativo mobile desenvolvido para a Global Solution de **Mobile Development & IoT – Engenharia de Software**.

Tema geral da GS: **O Futuro do Trabalho**  
Tema específico do app: **Comunidades de aprendizagem colaborativa e global**

---

## 🎯 Propósito do app

O app simula uma plataforma simples onde o usuário pode:

- Criar e salvar **comunidades globais de aprendizagem** (por tema, idioma, foco etc.).
- Mapear suas **skills do futuro** (hard e soft skills) e acompanhar sua evolução.
- Compartilhar experiências e aprendizados em um **Mural Global** assíncrono.
- Explorar tudo isso usando apenas **persistência local com AsyncStorage**, sem backend.

A ideia é mostrar como tecnologias acessíveis (como React Native + armazenamento local) já permitem criar experiências que conectam pessoas, desenvolvem competências e apoiam o **futuro do trabalho híbrido, distribuído e colaborativo**.

---

## 🧱 Tecnologias utilizadas

- **React Native + Expo**
- **Expo Router** (navegação por abas)
- **AsyncStorage** (persistência local)
- **TypeScript/JavaScript**
- Tema visual **minimalista**, com suporte a Light/Dark mode

---

## 📱 Funcionalidades principais

### 1. Comunidades (Aba **Comunidades**)

- Lista todas as comunidades cadastradas localmente.
- Permite **excluir comunidades** já salvas.
- Cada comunidade tem **nome** e **descrição**.
- Dados salvos em `AsyncStorage` com a chave `@communities`.
- Tela de criação acessível por **"+ Criar nova comunidade"**:
  - Nome da comunidade
  - Descrição / foco / idioma / fuso etc.
- Representa a ideia de **comunidades globais de aprendizagem**, onde pessoas de diferentes lugares trocam conhecimento.

---

### 2. Skills do futuro (Aba **Minhas skills**)

- Permite cadastrar skills com:
  - Nome da skill (ex: *IA generativa*, *Comunicação intercultural*, *Storytelling de dados*).
  - Nível atual (0 a 100).
- Mostra uma lista com barras de progresso minimalistas.
- Permite **excluir skills** que não fazem mais sentido para o usuário.
- Dados salvos em `AsyncStorage` com a chave `@skills`.
- Representa a jornada de **reskilling/upskilling**, fundamental no futuro do trabalho.

---

### 3. Mural Global (Aba **Mural global**)

- Um feed simples de postagens assíncronas:
  - Nome do autor (opcional)
  - Comunidade/tema (opcional)
  - Conteúdo da mensagem (campo obrigatório)
- As postagens são exibidas em forma de cards, do mais recente para o mais antigo.
- Permite **excluir publicações** do mural.
- Dados salvos em `AsyncStorage` com a chave `@posts`.
- Representa um mural de **colaboração global**, onde trabalhadores/aprendizes de diferentes contextos podem:
  - Compartilhar aprendizados
  - Compartilhar oportunidades
  - Registrar reflexões sobre o futuro do trabalho

---

## 🧭 Fluxo de navegação

- **Onboarding**: tela inicial contextualizando o futuro do trabalho e o app.
- **Tabs principais**:
  - **Comunidades** (`/(tabs)/index`)  
  - **Minhas skills** (`/(tabs)/explore`)  
  - **Mural global** (`/(tabs)/mural`)
- **Outras telas**:
  - `communities/create` – criação de comunidade
  - `skills/[id]` – detalhe de skill (mock para navegação)

---

## 🛠 Como rodar o projeto

Pré-requisitos:

- Node.js instalado
- Expo CLI (ou usar `npx expo` diretamente)
- Yarn ou npm

Passos:

```bash
# Na pasta app/
cd app

# Instalar dependências
npm install
# ou
yarn

# Rodar o projeto
npm start
# ou
yarn start
# ou
npx expo start
```

Depois, basta abrir no **Expo Go** (Android/iOS) ou emulador configurado.

---

## 📂 Estrutura simplificada

```bash
app/
 ├─ app/
 │   ├─ (tabs)/
 │   │   ├─ index.tsx        # Aba Comunidades
 │   │   ├─ explore.tsx      # Aba Minhas skills
 │   │   ├─ mural.tsx        # Aba Mural Global
 │   │   └─ _layout.tsx      # Configuração das tabs
 │   ├─ communities/
 │   │   ├─ index.js         # Lista de comunidades
 │   │   └─ create.js        # Criação de comunidade
 │   ├─ skills/
 │   │   └─ [id].js          # Detalhe de skill (mock)
 │   ├─ onboarding.js        # Tela de boas-vindas
 │   ├─ profile.js           # Perfil simples do usuário
 │   ├─ home.js              # Tela extra para testes
 │   └─ layout.js            # Layout raiz (Stack + StatusBar)
 ├─ constants/
 │   └─ theme.ts             # Tema minimalista (cores/tipografia)
 ├─ hooks/
 │   ├─ use-color-scheme.ts
 │   ├─ use-color-scheme.web.ts
 │   └─ use-theme-color.ts
 └─ src/
     ├─ components/
     │   ├─ CommunityCard.js # Card de comunidade
     │   ├─ SkillProgress.js # Barra de progresso de skill
     │   └─ PostItem.js      # Card de post (mural)
     └─ services/
         └─ storage.js       # Abstrações de AsyncStorage
```

---

## 👥 Integrantes (exemplo)

- Lucas Bandeira – RM 98640  
- Gustavo Kenzo – RM 98481
- Felipe Voidela – RM 98595 

---
