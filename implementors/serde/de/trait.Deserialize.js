(function() {var implementors = {};
implementors["dock_runtime"] = [{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Blob","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Bytes32","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Bytes33","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Bytes64","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Bytes65","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for PublicKey","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for DidSignature","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for KeyDetail","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for KeyUpdate","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for DidRemoval","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for GenesisConfig <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;(Did, KeyDetail)&gt;: DeserializeOwned,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Membership","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for GenesisConfig <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Membership: DeserializeOwned,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Policy","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Registry","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Revoke","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for UnRevoke","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for RemoveRegistry","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for SessionKeys","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for GenesisConfig","synthetic":false,"types":[]}];
implementors["poa"] = [{"text":"impl&lt;'de, T:&nbsp;Trait&gt; Deserialize&lt;'de&gt; for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;u32: DeserializeOwned,<br>&nbsp;&nbsp;&nbsp;&nbsp;u8: DeserializeOwned,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;T::AccountId&gt;: DeserializeOwned,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: DeserializeOwned,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: DeserializeOwned,<br>&nbsp;&nbsp;&nbsp;&nbsp;u8: DeserializeOwned,<br>&nbsp;&nbsp;&nbsp;&nbsp;u8: DeserializeOwned,<br>&nbsp;&nbsp;&nbsp;&nbsp;bool: DeserializeOwned,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()