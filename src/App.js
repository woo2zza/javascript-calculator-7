import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      if (input === "") {
        MissionUtils.Console.print("결과 : 0");
        return;
      }

      let numbers = [];
      const customDelimiterMatch = input.match(/^\/\/(.)\n(.*)/);

      if (customDelimiterMatch) {
        const customDelimiter = customDelimiterMatch[1];
        const numberPart = customDelimiterMatch[2];
        numbers = numberPart.split(new RegExp(`[${customDelimiter}]`));
      } else {
        numbers = input.split(/[,:]/);
      }

      const parsedNumbers = numbers.map((num) => {
        const parsed = Number(num);

        if (isNaN(parsed)) {
          throw new Error(" 잘못된 입력입니다.");
        }

        if (!Number.isInteger(parsed)) {
          throw new Error(" 소수는 입력할 수 없습니다.");
        }

        return parsed;
      });

      if (parsedNumbers.some((num) => num < 0)) {
        throw new Error(" 음수는 입력할 수 없습니다.");
      }

      const result = parsedNumbers.reduce((sum, num) => sum + num, 0);

      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print("[ERROR]" + error.message);
      console.error(error);
    }
  }
}

export default App;
