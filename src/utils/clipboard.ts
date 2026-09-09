/**
 * Safe cross-browser clipboard utility with fallback for iOS Safari and iframe restrictions.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  // 1. Try Modern Async Clipboard API
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) {
    console.warn('Async clipboard writeText error, attempting fallback:', err);
  }

  // 2. Fallback using hidden textarea for iOS Safari & legacy / restricted contexts
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    // Ensure element is off-screen and does not cause scroll jumps
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '-9999px';
    textArea.style.opacity = '0';
    textArea.setAttribute('readonly', '');
    document.body.appendChild(textArea);
    textArea.focus({ preventScroll: true });
    textArea.select();
    
    // For iOS Safari selection range
    textArea.setSelectionRange(0, text.length);

    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.warn('Document execCommand copy failed:', err);
    return false;
  }
}
