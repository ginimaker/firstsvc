// 가짜 계정 데이터 (비밀번호 없음)
const accountData = [
  {
    studentId: "10101",
    name: "김민수",
    accountId: "mskim10101@school.go.kr"
  },
  {
    studentId: "10102",
    name: "이서연",
    accountId: "sylee10102@school.go.kr"
  }
];

// 요소 가져오기
const form = document.getElementById("searchForm");
const studentIdInput = document.getElementById("studentId");
const nameInput = document.getElementById("name");
const accountIdSpan = document.getElementById("accountId");
const accountPwSpan = document.getElementById("accountPw");

// 검색 처리
form.addEventListener("submit", function (event) {
  event.preventDefault(); // 새로고침 방지

  const studentId = studentIdInput.value.trim();
  const name = nameInput.value.trim();

  // 🔎 입력값 검증 (UX 개선 1단계)
  if (!studentId || !name) {
    accountIdSpan.textContent = "-";
    accountPwSpan.textContent = "학번과 이름을 모두 입력해 주세요";
    return;
  }

  const result = accountData.find(item =>
    item.studentId === studentId && item.name === name
  );

  if (result) {
    accountIdSpan.textContent = result.accountId;
    accountPwSpan.textContent = "비밀번호는 담임교사에게 문의하세요";
  } else {
    accountIdSpan.textContent = "-";
    accountPwSpan.textContent = "학번이나 이름이 정확한지 다시 확인해 주세요";
  }
});
