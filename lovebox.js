function loadNotifications() {
  let notifications = [];
  // temp load from local storage.  Will be replaced with Websockets in the future.
  const notesJson = localStorage.getItem('notifications');
  if (notesJson) {
    notifications = JSON.parse(notesJson);
  }

  const listUlEl = document.querySelector('#notificationList');

  if (notifications.length) {
    for (const [i, note] of notifications.entries()) {
      const noteLi = document.createElement('li');

      noteLi.textContent = note.Message;

      listUlEl.appendChild(noteLi);
    }
  } else {
    listUlEl.innerHTML = '<li>Nobody loves you </li>';
  }
}

loadNotifications();
