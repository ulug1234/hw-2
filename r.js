const names = ["Улугбек", "Озод", "Шахриер"];

    
    let userName = localStorage.getItem("userName");

    
    if (!userName) {
      userName = prompt("Введите ваше имя:");
      localStorage.setItem("userName", userName);
    }

    
    if (names.includes(userName)) {
      alert("Имя не найдено в списке. Пожалуйста, введите имя снова.");
      userName = prompt("Введите ваше имя (Улугбек, Озод, Шахриер):");
      localStorage.setItem("userName", userName);
    }

   
    if (userName[0] !== userName[0].toUpperCase()) {
      alert("Ваше имя должно начинаться с большой буквы. Пожалуйста, введите имя снова.");
      userName = prompt("Введите ваше имя с большой буквы:");
      localStorage.setItem("userName", userName);
    }