import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from ".";

const renderHeader = () => {
    return render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
};

describe("Header Component", () => {
    test("deve renderizar corretamente", () => {
        renderHeader();
        expect(screen.getByAltText("Logo da empresa")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Buscar")).toBeInTheDocument();
        expect(screen.getByText("Início")).toBeInTheDocument();
        expect(screen.getByText("Cursos")).toBeInTheDocument();
    });

    test("deve permitir digitar no campo de busca", () => {
        renderHeader();
        const input = screen.getByPlaceholderText("Buscar");
        fireEvent.change(input, { target: { value: "React" } });
        expect(input.value).toBe("React");
    });

    test("deve navegar para a página de cursos ao buscar", () => {
        renderHeader();
        const input = screen.getByPlaceholderText("Buscar");
        const form = screen.getByRole("search");

        fireEvent.change(input, { target: { value: "JavaScript" } });
        fireEvent.submit(form);

        expect(global.window.location.pathname).toBe("/cursos");
        expect(global.window.location.search).toBe("?search=JavaScript");
    });

    test("deve navegar para a categoria de cursos ao clicar", () => {
        renderHeader();
        const programacaoButton = screen.getByText("Programação");
        fireEvent.click(programacaoButton);
        expect(global.window.location.pathname).toBe("/cursos");
        expect(global.window.location.search).toBe("?category=Programação");
    });
});
