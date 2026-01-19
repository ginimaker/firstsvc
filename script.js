// ==============================
// 가짜 계정 데이터 (비밀번호 미노출)
// ==============================
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

// ==============================
// 요소 가져오기
// ==============================
const form = document.getElementById("searchForm");
const studentIdInput = document.getElementById("studentId");
const nameInput = document.getElementById("name");
const accountIdSpan = document.getElementById("accountId");
const accountPwSpan = document.getElementById("accountPw");

// ==============================
// 학번 입력 UX 개선
// - 숫자만 허용
// - 최대 5자리 제한
// ==============================
const MAX_STUDENT_ID_LENGTH = 5;

studentIdInput.addEventListener("input", function () {
  let value = this.value.replace(/\D/g, ""); // 숫자만

  if (value.length > MAX_STUDENT_ID_LENGTH) {
    value = value.slice(0, MAX_STUDENT_ID_LENGTH);
  }

  this.value = value;
});

// ==============================
// 이름 입력 UX 개선
// - 띄어쓰기 자동 제거
// ==============================
nameInput.addEventListener("input", function () {
  this.value = this.value.replace(/\s+/g, "");
});

// ==============================
// 검색 처리
// ==============================
form.addEventListener("submit", function (event) {
  event.preventDefault(); // 새로고침 방지

  const studentId = studentIdInput.value
    .replace(/\D/g, "")
    .slice(0, MAX_STUDENT_ID_LENGTH)
    .trim();

  const name = nameInput.value.replace(/\s+/g, "").trim();

  // 입력값 검증
  if (!studentId || !name) {
    accountIdSpan.textContent = "-";
    accountPwSpan.textContent = "학번과 이름을 모두 입력해 주세요";
    return;
  }

  // 데이터 검색
  const result = accountData.find(item =>
    item.studentId === studentId && item.name === name
  );

  // 결과 출력
  if (result) {
    accountIdSpan.textContent = result.accountId;
    accountPwSpan.textContent = "비밀번호는 담임교사에게 문의하세요";
  } else {
    accountIdSpan.textContent = "-";
    accountPwSpan.textContent = "학번이나 이름이 정확한지 다시 확인해 주세요";
  }
});
