let currentDiscoverIndex = 0;
let matches = [];
let messages = {};
let currentPage = 'discover';
let currentChatCharacterId = null;
let currentStoryNode = null;

function switchPage(pageName) {
  currentPage = pageName;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + pageName).classList.add('active');
  
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.tab[data-page="' + pageName + '"]').classList.add('active');
  
  if (pageName === 'matches') {
    renderMatches();
  } else if (pageName === 'inbox') {
    renderInbox();
    document.getElementById('inbox-view').classList.remove('hidden');
    document.getElementById('chat-view').classList.add('hidden');
  }
}

function renderDiscoverCard(character) {
  document.getElementById('discover-image').src = character.avatar;
  document.getElementById('discover-name').textContent = character.name + ', ' + character.age;
  document.getElementById('discover-signal').textContent = '+' + character.signalValue;
  document.getElementById('discover-role').textContent = character.role;
  document.getElementById('discover-bio').textContent = character.bio;
  document.getElementById('discover-upgrade').textContent = '潜在提升: ' + character.potentialUpgrade.join(' / ');
  
  const tagsContainer = document.getElementById('discover-tags');
  tagsContainer.innerHTML = character.tags.map(tag => '<span class="tag">' + tag + '</span>').join('');
  
  const indexDisplay = document.getElementById('discover-index');
  if (indexDisplay) {
    indexDisplay.textContent = (currentDiscoverIndex + 1) + ' / ' + characters.length;
  }
}

function nextDiscoverCard() {
  currentDiscoverIndex = (currentDiscoverIndex + 1) % characters.length;
  renderDiscoverCard(characters[currentDiscoverIndex]);
}

function prevDiscoverCard() {
  currentDiscoverIndex = (currentDiscoverIndex - 1 + characters.length) % characters.length;
  renderDiscoverCard(characters[currentDiscoverIndex]);
}

function connectCurrentCharacter() {
  if (characters && characters[currentDiscoverIndex]) {
    matchCharacter(characters[currentDiscoverIndex].id);
  }
}

function matchCharacter(characterId) {
  const character = characters.find(c => c.id === characterId);
  if (character && !matches.find(m => m.id === characterId)) {
    matches.push(character);
    character.isMatched = true;
    
    if (!messages[characterId]) {
      messages[characterId] = [];
    }
  }
  nextDiscoverCard();
}

function renderMatches() {
  const list = document.getElementById('matches-list');
  if (matches.length === 0) {
    list.innerHTML = '<div class="empty-state">还没有配对，去发现页面滑动吧！</div>';
    return;
  }
  
  list.innerHTML = matches.map(m => `
    <div class="match-item" onclick="openChat('${m.id}')">
      <img class="avatar" src="${m.avatar}" alt="" />
      <div class="match-copy">
        <div class="match-top">
          <span class="match-name">${m.name}</span>
          <span class="match-time">刚刚</span>
        </div>
        <div class="match-preview">${m.bio.substring(0, 30)}...</div>
      </div>
    </div>
  `).join('');
}

function renderInbox() {
  const list = document.getElementById('conversation-list');
  const hasMessages = Object.keys(messages).length > 0 || matches.length > 0;
  
  if (!hasMessages) {
    list.innerHTML = '<div class="empty-state">还没有消息，先去配对一些人吧！</div>';
    return;
  }
  
  const inboxItems = matches.map(m => {
    const lastMsg = messages[m.id] && messages[m.id].length > 0 
      ? messages[m.id][messages[m.id].length - 1].text 
      : '点击开始聊天';
    return `
      <div class="conversation-item" onclick="openChat('${m.id}')">
        <img class="avatar" src="${m.avatar}" alt="" />
        <div class="conversation-copy">
          <div class="conversation-top">
            <span class="conversation-name">${m.name}</span>
            <span class="conversation-time">刚刚</span>
          </div>
          <div class="conversation-preview">${lastMsg.substring(0, 35)}${lastMsg.length > 35 ? '...' : ''}</div>
        </div>
      </div>
    `;
  }).join('');
  
  list.innerHTML = inboxItems;
}

function openChat(characterId) {
  const character = characters.find(c => c.id === characterId);
  if (!character) return;
  
  currentChatCharacterId = characterId;
  currentStoryNode = null;
  
  if (storylines && storylines[characterId]) {
    currentStoryNode = storylines[characterId].startNode;
  } else if (storylines && character.storyline && storylines[character.storyline]) {
    currentStoryNode = storylines[character.storyline].startNode;
  }
  
  document.getElementById('inbox-view').classList.add('hidden');
  document.getElementById('chat-view').classList.remove('hidden');
  
  document.getElementById('chat-avatar').src = character.avatar;
  document.getElementById('chat-name').textContent = character.name;
  document.getElementById('chat-status').textContent = '在线';
  
  renderChatMessages();
  renderReplyOptions();
}

function closeChat() {
  currentChatCharacterId = null;
  currentStoryNode = null;
  document.getElementById('inbox-view').classList.remove('hidden');
  document.getElementById('chat-view').classList.add('hidden');
  switchPage('inbox');
}

function renderChatMessages() {
  const container = document.getElementById('chat-messages');
  const chatMessages = messages[currentChatCharacterId] || [];
  
  if (chatMessages.length === 0 && currentStoryNode) {
    const character = characters.find(c => c.id === currentChatCharacterId);
    let storyline = storylines && storylines[currentChatCharacterId] 
      ? storylines[currentChatCharacterId]
      : (character && character.storyline && storylines && storylines[character.storyline] 
        ? storylines[character.storyline] 
        : null);
    
    if (storyline && storyline.nodes && storyline.nodes[currentStoryNode]) {
      const node = storyline.nodes[currentStoryNode];
      container.innerHTML = node.messages.map(msg => `
        <div class="message-bubble received">
          <div class="message-text">${msg}</div>
        </div>
      `).join('');
    }
  } else {
    container.innerHTML = chatMessages.map(msg => `
      <div class="message-bubble ${msg.isUser ? 'sent' : 'received'}">
        <div class="message-text">${msg.text}</div>
      </div>
    `).join('');
  }
  
  container.scrollTop = container.scrollHeight;
}

function renderReplyOptions() {
  const container = document.getElementById('reply-options');
  const character = characters.find(c => c.id === currentChatCharacterId);
  
  let storyline = storylines && storylines[currentChatCharacterId] 
    ? storylines[currentChatCharacterId]
    : (character && character.storyline && storylines && storylines[character.storyline] 
      ? storylines[character.storyline] 
      : null);
  
  if (!character) return;
  
  if (storyline && currentStoryNode && storyline.nodes && storyline.nodes[currentStoryNode]) {
    const node = storyline.nodes[currentStoryNode];
    if (node.replies && node.replies.length > 0) {
      container.innerHTML = node.replies.map((reply, i) => `
        <button class="reply-chip" onclick="selectReply(${i})">${reply.text}</button>
      `).join('');
      return;
    }
  }
  
  if (messageTemplates && messageTemplates.opening) {
    const templates = messageTemplates.opening.slice(0, 3);
    container.innerHTML = templates.map((t, i) => `
      <button class="reply-chip" onclick="sendQuickReply('${t.replace(/'/g, "\\'")}')">${t}</button>
    `).join('');
  }
}

function selectReply(replyIndex) {
  const character = characters.find(c => c.id === currentChatCharacterId);
  
  let storyline = storylines && storylines[currentChatCharacterId] 
    ? storylines[currentChatCharacterId]
    : (character && character.storyline && storylines && storylines[character.storyline] 
      ? storylines[character.storyline] 
      : null);
  
  if (!storyline || !currentStoryNode || !storyline.nodes) return;
  
  const node = storyline.nodes[currentStoryNode];
  const reply = node.replies[replyIndex];
  
  if (!messages[currentChatCharacterId]) {
    messages[currentChatCharacterId] = [];
  }
  
  node.messages.forEach(msg => {
    messages[currentChatCharacterId].push({ text: msg, isUser: false });
  });
  
  messages[currentChatCharacterId].push({ text: reply.text, isUser: true });
  
  if (reply.next && storyline.nodes[reply.next]) {
    currentStoryNode = reply.next;
    const nextNode = storyline.nodes[reply.next];
    if (nextNode.messages) {
      nextNode.messages.forEach(msg => {
        messages[currentChatCharacterId].push({ text: msg, isUser: false });
      });
    }
  } else {
    currentStoryNode = null;
  }
  
  renderChatMessages();
  renderReplyOptions();
}

function sendQuickReply(text) {
  if (!messages[currentChatCharacterId]) {
    messages[currentChatCharacterId] = [];
  }
  
  messages[currentChatCharacterId].push({ text: text, isUser: true });
  
  if (messageTemplates && messageTemplates.casualPing) {
    const replies = messageTemplates.casualPing;
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    messages[currentChatCharacterId].push({ text: randomReply, isUser: false });
  }
  
  renderChatMessages();
  renderReplyOptions();
}

function initApp() {
  if (characters && characters.length > 0) {
    renderDiscoverCard(characters[0]);
  }
  
  if (typeof switchPage === 'function') {
    switchPage('discover');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(initApp, 100);
});
