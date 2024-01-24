import React from 'react';
import styles from'./cal.module.css';
function Display({input, answer, setInput}) {
  const onChangeTagInput = (e) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };
  return (
  <>
    <div className={styles.display}>
        {/* <input className="input1" type="text"/>
        <input className="input2" type="text" placeholder="0"/> */}
         {answer === "" ? (
          <>
            <input
              type="text"
              name="input"
              className={styles.input}
              value={input}
              placeholder="0"
              maxLength={12}
              // disabled
              onChange={onChangeTagInput}
              autoComplete="off"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="input"
              className={styles.value}
              value={input}
              placeholder="0"
              maxLength={12}
              disabled
            />
            <input
              type="text"
              name="value"
              className={styles.input}
              value={answer}
              disabled
            />
          </>
        )}
    </div>
    </>
  )
}

export default Display
