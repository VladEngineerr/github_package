import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  describe('snapshots', () => {
    test('render with defaults', () => {
      const { baseElement } = render(<Button text="Test" onClick={vi.fn} />);

      expect(baseElement).toMatchSnapshot();
    });

    test('render disabled ', () => {
      const { baseElement } = render(
        <Button text="Test" onClick={vi.fn} disabled={true} />
      );

      expect(baseElement).toMatchSnapshot();
    });

    test('render with props', () => {
      const { baseElement } = render(
        <Button
          text="Test"
          type="submit"
          className="foobar"
          design="secondary"
          testID="xFooBar"
          onClick={vi.fn}
        />
      );

      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('integration', () => {
    let user;

    beforeEach(() => {
      user = userEvent.setup();
    });

    afterEach(() => {
      user = null;
    });

    test('onClick', async () => {
      const onClick = vi.fn();

      render(<Button text="Test" onClick={onClick} />);

      const button = screen.getByTestId('xButton');

      await user.click(button);
    });
  });
});

