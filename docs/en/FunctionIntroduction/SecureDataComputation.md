# Secure Data Computation

Digitalization has brought us many conveniences but also turned us into "gold mines" of others, exploited recklessly by monopolistic organizations for massive returns.

Meanwhile, as businesses conduct more activities, different organizations have accumulated a large amount of data, forming their own "data lakes".

Within such a context, how to make these "data lakes" flow and become "living water" while being regulated has brought issues and challenges to computing technology.

Over recent years, along with the rapid advancement in the relevant fields, privacy-preserving computation technology has become an essential means to meet this demand.

In the future, the technology will become the infrastructure of the digital age and promote data flow while safeguarding data privacy and security.

This is why **Datum** has provided a series of application-oriented, out-of-the-box privacy-preserving computing capabilities based on privacy-enhancing technologies such as [PSI](#ref_psi) and [MPC](#ref_mpc) (both provided by the privacy-preserving AI framework [Rosetta](#ref_rosetta)), [HE](#ref_he), etc.

Specifically, Datum has built a decentralized off-chain computation network through decentralized scheduling and on-chain financial incentives, and fully supports the following types of data computation:

* [Outsourcing Computation](#head1)

* [Joint Query & Stat](#head2)

* [Federated Machine Learning](#head3)

  

Users can execute the relevant functions by calling APIs in a clear, concise manner, without having to know too much about the execution details of different cryptographic algorithms. This makes the platform more accessible, solves the risks and concerns of traditional data sharing, and enables more smooth data collaboration and flows.

## <a name="head1"></a> Outsourcing Computation

[Homomorphic encryption](#ref_he) technology is adopted to encrypt the data to be sent to a third-party computing node for outsourced computation. The computation is conducted based on the ciphertext data, which discloses any information about the raw data.



![][delegate_computing]



The above figure shows that Datum uses homomorphic encryption computation to fully decouple the data party and the computing party, which fundamentally solves the problem of confidentiality when entrusting data and data operations to third parties.

## <a name="head2"></a> Joint Query & Stat

Let's consider the following **case**:

Company A is an automobile vendor and has a list of potential clients. It wants to answer one question: *Who can afford this new car model?*

To answer the question, a simple method is to find out who has enough money.

Obviously, banks will not tell you the amount of the customer's deposit directly. But they might be willing to offer you a list of clients that fall within a certain income class (the middle class, for example).

This allows Company A to determine existing clients that are on the list provided by banks, i.e., those who can afford the new car model.

In this process, no participant disclosed any private data except for the necessary information, which forms a [Private set intersection](#ref_psi) (PSI).



![][psi_eg]



Similarly, many real-world problems that relate to privacy-preserving can be expressed as **follows**:


![][priv_op_paradigm]



Datum fully supports this paradigm. Based on the [MPC](#ref_mpc) algorithm protocol, the platform achieves different types of multi-party computation, covering joint query, joint match, and joint stat & analysis, without disclosing any additional information of the parties involved, and provides data services for the chain through [Data Oracle][data_oracle].



## <a name="head3"></a> Joint Machine Learning

More complex applications may require automated modeling based on data to cope with unknown events efficiently.

All sorts of technologies have been developed based on methods used to maintain data security. For instance, the security of data transmission and computation is guaranteed by adopting cryptographic technologies such as [MPC](#ref_mpc) or hardware-enabled methods like [TEE](#ref_tee). In the case of [federated learning](#ref_fl), users don't even have to transmit the raw data but only need to transfer the incremental updates of the model.

Datum provides a unified call interface for privacy-preserving AI computation. By integrating mainstream privacy-preserving computation technologies, the interface achieves a wide range of private data operations, including AI algorithms such as feature engineering, machine learning, and deep learning, which enables multiple parties to jointly train AI models with great efficiency. Moreover, Datum provides on-chain prediction and reasoning services through [Data Oracle][data_oracle].



![][joint_ai]



Note:

1. The fact that the training methods in the figure above include [MPC](#ref_mpc), [TEE](#ref_tee), and [federated learning](#ref_fl) does not indicate that the training is centralized. Instead, it shows that the APIs are fully integrated.

2. The trained model may be held by multiple parties, depending on the requirements and training methods.



## Please refer to [APIs for Secure Data Computation][api desc] for more specific usage instructions



**Terms:**

+ <a name="ref_psi"></a> [Private Set Intersection](https://en.wikipedia.org/wiki/Private_set_intersection) (PSI) allows two parties holding raw data to compute the intersection of their data without disclosing any other information about the raw data. It supports the Diffie-Hellman (DH) algorithm and the Homomorphic Encryption (HE) algorithm.

+ Privacy Label Query uses the label-based technology of Labeled Private Set Intersection and allows the Requester to obtain the intersection of data between himself and the Provider, as well as the Label data that corresponds to the intersection, while making sure that the Requester does not disclose the query content and the Provider does not disclose any other data. The function supports the Diffie-Hellman (DH) algorithm and the Homomorphic Encryption (HE) algorithm.

+ <a name="ref_mpc"></a> [Secure Multi-Party Computation](https://en.wikipedia.org/wiki/Secure_multi-party_computation) (MPC) allows a group of distrusting parties to jointly compute a function of their inputs and obtain the correct result while keeping those inputs private. It requires that each participant cannot obtain any private information other than its own data (and the computation result) and the expected disclosure by other participants.

+ <a name="ref_he"></a> [Homomorphic Encryption](https://en.wikipedia.org/wiki/Homomorphic_encryption) (HE) is a form of encryption that permits users to perform computations on its encrypted data without decrypting. These resulting computations, when decrypted, are identical to the computation result of the plaintext data. 

+ <a name="ref_rosetta"></a> [Privacy-preserving AI Framework Rosetta](../Reference/ThePrivacy-preservingAIFrameworkRosetta.md) based on TensorFlow carries and combines three typical technologies: AI, privacy-preserving AI, and blockchain. The framework is more accessible to AI developers. With Rosetta, AI developers can convert existing AI codes into programs with privacy protection functions by changing only two or three lines of code without having to be an expert on privacy-preserving AI technologies.

+ <a name="ref_fl"></a> [Federated_Learning](https://en.wikipedia.org/wiki/Federated_learning) (FL) is a machine learning technique that trains an algorithm across multiple decentralized edge devices or servers holding local data samples, without exchanging them. 

+ <a name="ref_tee"></a> [Trusted Execution Environment](https://en.wikipedia.org/wiki/Trusted_execution_environment) (TEE) is an area of the CPU of mobile devices (smartphones, tablets, smart televisions, etc.) that offers a more secure space for the execution of data and code while ensuring their confidentiality and integrity.

  

[priv_op_paradigm]: ../img/priv_op_paradigm.png
[delegate_computing]: ../img/delegate_computing.png
[psi_eg]: ../img/psi_eg.png
[joint_ai]: ../img/joint_ai.png

[data_oracle]: ./DataOracle.md
[api desc]: ../APIDescription/SecureDataComputation.md


