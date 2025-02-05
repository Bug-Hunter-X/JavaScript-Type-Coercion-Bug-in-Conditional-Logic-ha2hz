# JavaScript Type Coercion Bug

This repository demonstrates a common yet subtle bug in JavaScript related to type coercion and loose equality. The `foo` function aims to handle null, negative, and positive numbers differently. However, a flaw in the conditional logic causes an unexpected outcome for the input value `0`.