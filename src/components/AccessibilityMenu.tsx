import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  Type, 
  Minus, 
  Plus, 
  RotateCcw, 
  Settings,
  X,
  Keyboard,
  Volume2
} from 'lucide-react';

interface AccessibilityMenuProps {
  onFontSizeChange: (size: number) => void;
  onContrastToggle: () => void;
  fontSize: number;
  highContrast: boolean;
}

const AccessibilityMenu: React.FC<AccessibilityMenuProps> = ({
  onFontSizeChange,
  onContrastToggle,
  fontSize,
  highContrast
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const increaseFontSize = () => {
    if (fontSize < 1.5) {
      onFontSizeChange(fontSize + 0.1);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 0.8) {
      onFontSizeChange(fontSize - 0.1);
    }
  };

  const resetSettings = () => {
    onFontSizeChange(1);
    if (highContrast) {
      onContrastToggle();
    }
  };

  // Fechar menu com ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Botão de Acessibilidade */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 ${
          highContrast 
            ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
        aria-label="Menu de Acessibilidade"
        aria-expanded={isOpen}
        aria-controls="accessibility-menu"
        tabIndex={1}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Settings className="w-6 h-6" />}
      </button>

      {/* Menu de Acessibilidade */}
      {isOpen && (
        <div
          id="accessibility-menu"
          className={`fixed top-20 right-4 z-40 p-6 rounded-xl shadow-2xl border-2 transition-all duration-300 ${
            highContrast
              ? 'bg-black text-yellow-400 border-yellow-400'
              : 'bg-white text-gray-800 border-gray-200'
          }`}
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-modal="true"
        >
          <h3 
            id="accessibility-title"
            className="text-lg font-bold mb-4 flex items-center"
          >
            <Eye className="w-5 h-5 mr-2" />
            Acessibilidade
          </h3>

          <div className="space-y-4 min-w-[280px]">
            {/* Controle de Fonte */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                <Type className="w-4 h-4 inline mr-2" />
                Tamanho da Fonte
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 0.8}
                  className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 ${
                    highContrast
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300 disabled:bg-gray-600'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100'
                  }`}
                  aria-label="Diminuir fonte"
                  tabIndex={2}
                >
                  <Minus className="w-4 h-4" />
                </button>
                
                <span 
                  className="px-3 py-1 rounded text-sm font-medium"
                  aria-live="polite"
                >
                  {Math.round(fontSize * 100)}%
                </span>
                
                <button
                  onClick={increaseFontSize}
                  disabled={fontSize >= 1.5}
                  className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 ${
                    highContrast
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300 disabled:bg-gray-600'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100'
                  }`}
                  aria-label="Aumentar fonte"
                  tabIndex={3}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Controle de Contraste */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                <Eye className="w-4 h-4 inline mr-2" />
                Contraste
              </label>
              <button
                onClick={onContrastToggle}
                className={`w-full p-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  highContrast
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                aria-pressed={highContrast}
                tabIndex={4}
              >
                {highContrast ? 'Desativar Alto Contraste' : 'Ativar Alto Contraste'}
              </button>
            </div>

            {/* Informações de Navegação */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                <Keyboard className="w-4 h-4 inline mr-2" />
                Navegação por Teclado
              </label>
              <div className={`p-3 rounded-lg text-xs ${
                highContrast ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <p className="mb-1"><kbd className="px-1 py-0.5 bg-gray-300 text-black rounded">Tab</kbd> - Navegar</p>
                <p className="mb-1"><kbd className="px-1 py-0.5 bg-gray-300 text-black rounded">Enter</kbd> - Ativar</p>
                <p><kbd className="px-1 py-0.5 bg-gray-300 text-black rounded">Esc</kbd> - Fechar menu</p>
              </div>
            </div>

            {/* Botão Reset */}
            <button
              onClick={resetSettings}
              className={`w-full p-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center ${
                highContrast
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              tabIndex={5}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Restaurar Padrão
            </button>
          </div>
        </div>
      )}

      {/* Overlay para fechar o menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default AccessibilityMenu;