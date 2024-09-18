import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react';
import { useCustomHook } from './useCustomHook'
import { Component } from '.';

vi.mock("./useCustomHook", () => ({
    useCustomHook: vi.fn().mockReturnValue({ state: false })
}))

describe('Component', async () => {
    it('state is false', async () => {

        render(<Component />);
        expect(screen.getByText('state is false')).toBeInTheDocument()
    });

    it('state is true', async () => {
        useCustomHook.mockReturnValue({ state: true })
        render(<Component />);
        expect(screen.getByText('state is true')).toBeInTheDocument()
    });

    it('state is false then change to true', async () => {
        useCustomHook.mockReturnValue({ state: false })
        const component = render(<Component />);
        expect(screen.getByText('state is false')).toBeInTheDocument()

        useCustomHook.mockReturnValue({ state: true })
        component.rerender(<Component />)
        expect(screen.getByText('state is true')).toBeInTheDocument()
    });
});