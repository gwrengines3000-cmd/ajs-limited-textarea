// for your textarea element:
const textareaStyle = {
    width: '300px',
    height: '150px',
}

// for the paragraph element that displays the character count:
const pStyle = {
    fontFamily: 'monospace',
    fontSize: '14px',
    textAlign: 'right',
    marginTop: '4px',
}

const LimitedTextarea = ({ maxLength }) => {
    const [text, setText] = React.useState('200 characters max');

    const handleChange = (event) => {
        const newText = event.target.value;
        if (newText.length <= maxLength) {
            setText(newText);
        }
    };

    return (
        <div>
            <textarea
                style={textareaStyle}
                value={text}
                onChange={handleChange}
                maxLength={maxLength}
            />
            <p style={pStyle}>
                {text.length}/{maxLength}
            </p>
        </div>
    );
}
export default LimitedTextarea;  