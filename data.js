// 임베디드 스킬 트리 공통 설정
// ─────────────────────────────────────────────
// 주제 내용은 data/ 폴더에 분야별 파일로 나뉘어 있습니다.
//   data/core.js  출발점 (C 언어)
//   data/ee.js    전기전자
//   data/arch.js  컴퓨터 구조
//   data/hw.js    하드웨어 시스템
//   data/emb.js   임베디드 시스템 (MCU·펌웨어·RTOS)
//   data/comm.js  임베디드 시스템 (통신·인터페이스)
//   data/linux.js 임베디드 리눅스·소프트웨어 (리눅스)
//   data/sw.js    임베디드 리눅스·소프트웨어 (소프트웨어·품질)
//
// 주제 하나의 모양:
//   id       : 고유 이름 (영문)
//   t        : 분야 (아래 TRACKS 의 키)
//   d        : 단계 (0 = 가운데 START, 1~3 = 기초, 4~6 = 심화)
//   title    : 원 아래 표시되는 이름
//   h        : 예상 공부 시간(시간)
//   pre      : 먼저 공부하면 좋은 주제 id 목록 (잠금이 아니라 권장 순서, 비우면 바로 시작 가능)
//   sum      : 한두 문장 요약
//   concepts : [개념 이름, 설명] 목록. 설명 안의 `글자` 는 코드 글꼴로 보입니다.
//   res      : 추천 자료 [이름, 링크(없으면 null)]
//   quiz     : 확인 문제 5개 { q: 질문, o: [보기 4개], a: 정답 번호(0부터), e: 해설 }

window.ADVANCED_FROM = 4; // 이 단계부터 '심화'

// 큰 분야 5개. angle 은 지도에서 분야가 뻗는 방향(위쪽 0°, 시계 방향).
//   임베디드 시스템 = MCU·펌웨어·RTOS (data/emb.js) + 통신·인터페이스 (data/comm.js)
//   임베디드 리눅스·소프트웨어 = 임베디드 리눅스 (data/linux.js) + 소프트웨어·품질 (data/sw.js)
window.TRACKS = {
  core:  { name: "출발점" },
  ee:    { name: "전기전자",                   angle: 0 },
  arch:  { name: "컴퓨터 구조",                angle: 72 },
  hw:    { name: "하드웨어 시스템",            angle: 144 },
  emb:   { name: "임베디드 시스템",            angle: 216 },
  linux: { name: "임베디드 리눅스·소프트웨어", angle: 288 },
};

// 주제 묶음: 비슷한 주제끼리 묶어 같은 색으로 표시한다 (왼쪽 아래 목록).
//   ids 에 주제 id 를 넣으면 그 묶음 색이 된다. 주제를 새로 만들면 여기에도 추가하세요.
window.GROUPS = [
  { key: "prog",    name: "프로그래밍 기초",     color: "#e2e8e4", ids: ["c", "dsa", "clean", "git"] },
  { key: "circuit", name: "회로·전자 기초",      color: "#f5d04a", ids: ["circuit", "passive", "meter", "semi", "opamp", "power"] },
  { key: "signal",  name: "신호·제어",           color: "#f0a030", ids: ["signals", "filter", "control"] },
  { key: "powerel", name: "전력·모터",           color: "#ff6f3c", ids: ["pe", "motor", "bms", "emc"] },
  { key: "digital", name: "디지털·CPU 기초",     color: "#c3a8ff", ids: ["logic", "numrep", "cpu", "isa", "asm", "memh"] },
  { key: "proc",    name: "프로세서 심화",       color: "#8a7dff", ids: ["pipe", "exc", "cache", "perf", "armadv", "vm", "multicore", "riscv"] },
  { key: "board",   name: "보드·PCB 설계",       color: "#c9956a", ids: ["schem", "pcb", "parts", "assembly", "si", "hspcb"] },
  { key: "fpga",    name: "FPGA·디지털 설계",    color: "#f781c6", ids: ["hdl", "fpga", "fsm", "sta", "bus", "verif", "soc"] },
  { key: "mcu",     name: "MCU·펌웨어",          color: "#ff5f6d", ids: ["mcu", "gpio", "build", "irq", "timer", "adc", "dma", "lowpower", "boot", "fwarch"] },
  { key: "rtos",    name: "RTOS",                color: "#2fd4b0", ids: ["rtos", "task", "sync", "freertos"] },
  { key: "chip",    name: "칩 간 통신",          color: "#4fc3f7", ids: ["commbasic", "level", "uart", "spi", "i2c", "usb", "rs485"] },
  { key: "vnet",    name: "차량 네트워크",       color: "#4d82ff", ids: ["can", "canapp", "autoeth"] },
  { key: "iot",     name: "네트워크·IoT",        color: "#8ff0f0", ids: ["eth", "wireless", "iot"] },
  { key: "linux",   name: "리눅스 기초",         color: "#a8e05f", ids: ["shell", "sysprog", "cross", "kbasic", "bootflow"] },
  { key: "kernel",  name: "커널·BSP",            color: "#4cbb5a", ids: ["uboot", "kbuild", "dt", "driver", "rtlinux", "yocto", "bsp"] },
  { key: "quality", name: "테스트·품질·안전",    color: "#b4c3cc", ids: ["debug", "test", "misra", "ci", "hil", "safety", "security"] },
];

window.NODES = [];
