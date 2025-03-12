type LoadingMessage = {
  threshold: number;
  message: string;
}

export const loadingMessages: LoadingMessage[] = [
  { threshold: 0, message: "Polishing the aluminum..." },
  { threshold: 15, message: "Calibrating retina display..." },
  { threshold: 30, message: "Charging battery to 100%..." },
  { threshold: 45, message: "Installing butterfly keyboard... just kidding!" },
  { threshold: 60, message: "Maximizing performance..." },
  { threshold: 75, message: "Aligning pixels perfectly..." },
  { threshold: 85, message: "Cooling down the M2 chip..." },
  { threshold: 95, message: "Brightening up the display..." }
]